
package br.com.brq.apicurso.camel;

import org.apache.camel.builder.RouteBuilder;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class AppCamel extends RouteBuilder {
	
	@Value("${server.port}")
	private int port;
	
	@Value("${spring.profiles.active}")
	private String activeProfile;

	@Override
	public void configure() throws Exception {
		
	if(!"without-camel".equals(activeProfile)) {
			restConfiguration().host("localhost").port(port);
			
			from("timer:hello?period={{timer.period}}")
			.setHeader("id", simple("${random(1,4)}"))
			.to("rest:get:camel/pets/{id}")
			.streamCaching()
			.process(new PetProcessor())
			.log("${body}");
	}
	}

}
