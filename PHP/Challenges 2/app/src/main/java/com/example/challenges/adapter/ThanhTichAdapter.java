package com.example.challenges.adapter;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import com.example.challenges.R;
import com.example.challenges.model.ThanhTich;


import java.util.List;

public class ThanhTichAdapter extends RecyclerView.Adapter<ThanhTichAdapter.ThanhTichViewHolder> {

    private List<ThanhTich> thanhTiches;

    public ThanhTichAdapter(List<ThanhTich> thanhTiches) {
        this.thanhTiches = thanhTiches;
    }
    public void updateDataThanhTich(List<ThanhTich> newData){
        thanhTiches.clear();
        thanhTiches.addAll(newData);
        notifyDataSetChanged();
    }

    @NonNull
    @Override
    public ThanhTichAdapter.ThanhTichViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(parent.getContext()).inflate(R.layout.item_thanh_tich,parent,false);
        return new ThanhTichViewHolder(view);
    }


    @Override
    public void onBindViewHolder(@NonNull ThanhTichAdapter.ThanhTichViewHolder holder, int position) {
        ThanhTich thanhTich = thanhTiches.get(position);
        holder.tvTen.setText(thanhTich.getTen());
        holder.tvLopHoc.setText(thanhTich.getLop());
        holder.tvMaMon.setText(thanhTich.getMa_mon());
        holder.tvTenMon.setText(thanhTich.getTen_mon());
        holder.tvDatLoai.setText(thanhTich.getDatloai());
        holder.tvNgaythem.setText(thanhTich.getNgay());

    }

    @Override
    public int getItemCount() {
        return thanhTiches.size();
    }

    public class ThanhTichViewHolder extends RecyclerView.ViewHolder {
        private TextView tvTen,tvMaMon, tvTenMon, tvNgaythem,tvDatLoai,tvLopHoc;
        public ThanhTichViewHolder(@NonNull View itemView) {
            super(itemView);
            tvTen = itemView.findViewById(R.id.tvTen);
            tvLopHoc = itemView.findViewById(R.id.tvLopHoc);
            tvMaMon = itemView.findViewById(R.id.tvMaMon);
            tvTenMon = itemView.findViewById(R.id.tvTenMon);
            tvDatLoai = itemView.findViewById(R.id.tvDatLoai);
            tvNgaythem = itemView.findViewById(R.id.tvNgaythem);

        }
    }
}
