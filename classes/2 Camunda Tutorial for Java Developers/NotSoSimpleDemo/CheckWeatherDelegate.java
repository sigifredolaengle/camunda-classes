package com.camunda.demo.NotSoSimpleDemo;

import java.util.Random;
import java.util.ArrayList;

import org.camunda.bpm.engine.delegate.DelegateExecution;
import org.camunda.bpm.engine.delegate.JavaDelegate;

public class CheckWeatherDelegate implements JavaDelegate {

	@Override
	public void execute(DelegateExecution execution) throws Exception {
		Random rando = new Random();
		
		execution.setVariable("name", "Sopapiglobo");
		execution.setVariable("weatherOk", rando.nextBoolean());
	}

}
