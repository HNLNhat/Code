package com.example.challenges;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.os.Handler;
import android.view.animation.AlphaAnimation;
import android.view.animation.Animation;
import android.view.animation.DecelerateInterpolator;
import android.view.animation.ScaleAnimation;
import android.widget.ImageView;
import android.widget.TextView;

public class ManHinhChaoActivity extends AppCompatActivity {
    // thời gian hiển thị màn hình chào

    private static int MANHINHCHAO_TIME_OUT = 3000; // 3 giây
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_man_hinh_chao);

//        ImageView imageViewBee = findViewById(R.id.ivBee);
//
//        Animation animation = new ScaleAnimation(
//                1.0f, 2.0f, // Tỷ lệ phóng to từ 1.0 đến 2.0 theo chiều ngang
//                1.0f, 2.0f, // Tỷ lệ phóng to từ 1.0 đến 2.0 theo chiều dọc
//                Animation.RELATIVE_TO_SELF, 0.5f, // Tâm xoay theo chiều ngang
//                Animation.RELATIVE_TO_SELF, 0.5f // Tâm xoay theo chiều dọc
//        );
//        animation.setDuration(1000); // Đặt thời lượng animation
//        imageViewBee.startAnimation(animation);
//        // Handler sẽ chạy sau thời gian đã định và chuyển sang MainActivity
        new Handler().postDelayed(new Runnable() {
            @Override
            public void run() {
                Intent intent = new Intent(ManHinhChaoActivity.this, ChooseActivity.class);
                startActivity(intent);
                finish();
            }
        }, MANHINHCHAO_TIME_OUT);

    }

}