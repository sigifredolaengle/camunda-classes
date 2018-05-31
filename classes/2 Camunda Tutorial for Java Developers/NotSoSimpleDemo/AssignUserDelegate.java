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

		// Leemos desde el flujo el valor de la variable 'group_id' y lo guardamos en 'group'.
		String group = execution.getVariable("group_id").toString();
		
		// Si no se especifica un grupo, pedimos una lista con todos los usuarios.
		if (group.isEmpty())
		{
			users = userQ.list();
		}
		// Pero si se especifica un grupo pedimos una lista con los usuarios que
		// pertenecen a él.
		else
		{
			users = userQ.memberOfGroup(group).list();	
		}
		
		// Elegimos desde la lista un usuario al azar.
		int index = rando.nextInt(users.size());
		String user = users.get(index).getId();
			
		// El usuario seleccionado se guarda en la variable 'assignee'.
		execution.setVariable("assignee", user);
	}
}
