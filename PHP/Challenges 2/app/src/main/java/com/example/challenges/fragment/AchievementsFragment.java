package com.example.challenges.fragment;
import androidx.fragment.app.Fragment;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import android.os.Bundle;
import android.text.TextUtils;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import com.example.challenges.ApiInterface;
import com.example.challenges.R;
import com.example.challenges.SearchableFragment;
import com.example.challenges.adapter.ThanhTichAdapter;
import com.example.challenges.model.ThanhTich;

import java.util.ArrayList;
import java.util.List;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;

public class AchievementsFragment extends Fragment implements SearchableFragment {

    private RecyclerView rcvThanhTich;
    private ThanhTichAdapter thanhTichAdapter;
    private List<ThanhTich> thanhTichList;
    private List<ThanhTich> filteredListThanhTich; //ds lưu kết quả search

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        //Khởi tạo danh sách thông báo và danh sách kết quả search
        thanhTichList = new ArrayList<>();
        filteredListThanhTich = new ArrayList<>();
        //Khởi tạo lichHocAdapter và đưa danh sách ban đầu vào RecyclerView
        thanhTichAdapter = new ThanhTichAdapter(thanhTichList);
    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        View rootView = inflater.inflate(R.layout.fragment_achievements, container, false);

        rcvThanhTich = rootView.findViewById(R.id.rcvThanhTich);
        rcvThanhTich.setLayoutManager(new LinearLayoutManager(getActivity()));
        thanhTichAdapter = new ThanhTichAdapter(thanhTichList);
        rcvThanhTich.setAdapter(thanhTichAdapter);

        //Khởi tạo retrofit
        Retrofit retrofit = new Retrofit.Builder()
                .baseUrl("http://192.168.1.15/challenges/thanhtich/")
                .addConverterFactory(GsonConverterFactory.create())
                .build();

        //Gọi API và cập nhật dữ liệu vào adapter khi nhận được kết quả
        ApiInterface apiInterface = retrofit.create(ApiInterface.class);
        Call<List<ThanhTich>> call = apiInterface.getThanhTich();
        call.enqueue(new Callback<List<ThanhTich>>() {
            @Override
            public void onResponse(Call<List<ThanhTich>> call, Response<List<ThanhTich>> response) {
                if (response.isSuccessful() && response.body() != null){
                    List<ThanhTich> thanhTiches = response.body();
                    thanhTichList.clear();
                    thanhTichList.addAll(thanhTiches);
                    thanhTichAdapter.notifyDataSetChanged();
                }else {

                }
            }

            @Override
            public void onFailure(Call<List<ThanhTich>> call, Throwable t) {

            }
        });
        return rootView;
    }

    @Override
    public void performSearch(String query) {
        if (TextUtils.isEmpty(query)){
            filteredListThanhTich.addAll(thanhTichList);
        }else {
            //duyệt ds lịch học và thêm vào filteredListLichHoc các lịch học phù hợp với từ khoá
            for (ThanhTich thanhTich : thanhTichList){
                if (thanhTich.getTen().toLowerCase().contains(query.toLowerCase())
                        || thanhTich.getLop().toLowerCase().contains(query.toLowerCase())
                        || thanhTich.getNgay().toLowerCase().contains(query.toLowerCase())
                        || thanhTich.getMa_mon().toLowerCase().contains(query.toLowerCase())
                        || thanhTich.getTen_mon().toLowerCase().contains(query.toLowerCase())
                        || thanhTich.getDatloai().toLowerCase().contains(query.toLowerCase())){
                    filteredListThanhTich.add(thanhTich);
                }
            }
        }
        thanhTichAdapter.updateDataThanhTich(filteredListThanhTich);
        thanhTichAdapter.notifyDataSetChanged();
    }
}