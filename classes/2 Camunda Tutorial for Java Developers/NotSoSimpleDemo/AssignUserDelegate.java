package org.camunda.demo.NotSoSimpleDemo;

import java.util.List;
import java.util.Random;

import org.camunda.bpm.engine.IdentityService;
import org.camunda.bpm.engine.delegate.DelegateExecution;
import org.camunda.bpm.engine.delegate.JavaDelegate;
import org.camunda.bpm.engine.identity.Group;
import org.camunda.bpm.engine.identity.User;
import org.camunda.bpm.engine.identity.UserQuery;

public class AssignUserDelegate implements JavaDelegate {

	@Override
	public void execute(DelegateExecution execution) throws Exception {
		Random rando = new Random();
		List<User> users;
		
		// Identificador de la instacia del proceso.
		IdentityService ids = execution.getProcessEngineServices().getIdentityService();
		
		// Query a la BD de usuarios.
		UserQuery userQ = ids.createUserQuery();

		String group = execution.getVariable("group_id").toString();
		
		if (group.isEmpty())
		{
			users = userQ.list();
		}
		else
		{
			users = userQ.memberOfGroup(group).list();	
		}
		
		// Random User from Group
		int index = rando.nextInt(users.size());
		String user = users.get(index).getId();
			
		execution.setVariable("assignee", user);
	}
}
