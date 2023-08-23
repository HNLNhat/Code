package com.example.challenges;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.MotionEvent;
import android.view.View;
import android.view.animation.Animation;
import android.view.animation.ScaleAnimation;
import android.widget.ImageView;

public class ChooseActivity extends AppCompatActivity {

    ImageView ivStudent, ivTeacher, ivParents;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_choose);

        ivStudent = findViewById(R.id.ivStudent);
        ivTeacher = findViewById(R.id.ivTeacher);
        ivParents = findViewById(R.id.ivParents);

        ivStudent.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent intent = new Intent(ChooseActivity.this, LoginActivity.class);
                startActivity(intent);
            }
        });
        ivTeacher.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent intent = new Intent(ChooseActivity.this, TeacherActivity.class);
                startActivity(intent);
            }
        });
        ivParents.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent intent = new Intent(ChooseActivity.this, ParentsActivity.class);
                startActivity(intent);
            }
        });

    }

}
