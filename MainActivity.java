package com.example.yykf.tipcalculator;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;

public class MainActivity extends AppCompatActivity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);


        float tip;
        final EditText editTextBill = (EditText)findViewById(R.id.editTextBill);
        final EditText editTextTip = (EditText)findViewById(R.id.editTextTip);
        final TextView textViewTotal = (TextView)findViewById(R.id.textViewTotal);
        Button button = (Button)findViewById(R.id.button);

        button.setOnClickListener(new View.OnClickListener(){
            @Override
            public void onClick(View v) {
                float bill = Float.parseFloat(editTextBill.getText().toString());
                float tip = Float.parseFloat(editTextTip.getText().toString());
                float total = bill/100*tip + bill;
                textViewTotal.setText(Float.toString(total));
            }
        });

    }
}
