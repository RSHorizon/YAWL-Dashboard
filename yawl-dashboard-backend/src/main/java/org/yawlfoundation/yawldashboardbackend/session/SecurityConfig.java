/*
 * Copyright (c) 2004-2012 The YAWL Foundation. All rights reserved.
 * The YAWL Foundation is a collaboration of individuals and
 * organisations who are committed to improving workflow technology.
 *
 * This file is part of YAWL. YAWL is free software: you can
 * redistribute it and/or modify it under the terms of the GNU Lesser
 * General Public License as published by the Free Software Foundation.
 *
 * YAWL is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY
 * or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Lesser General
 * Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public
 * License along with YAWL. If not, see <http://www.gnu.org/licenses/>.
 */
package org.yawlfoundation.yawldashboardbackend.session;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpStatus;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.logout.HttpStatusReturningLogoutSuccessHandler;
import org.springframework.security.web.authentication.logout.LogoutSuccessHandler;
import org.yawlfoundation.yawldashboardbackend.session.handler.RestAuthenticationEntryPoint;
import org.yawlfoundation.yawldashboardbackend.session.handler.RestAuthenticationFailureHandler;
import org.yawlfoundation.yawldashboardbackend.session.handler.RestAuthenticationSuccessHandler;
import org.yawlfoundation.yawldashboardbackend.session.handler.RestLogoutSuccessHandler;
import org.yawlfoundation.yawldashboardbackend.session.resourceservice.YawlResourceServiceConfig;
import org.yawlfoundation.yawldashboardbackend.session.userdetailaccess.SessionDataHolder;

import static org.springframework.security.config.Customizer.withDefaults;


/**
 * @author Robin Steinwarz
 */

@Configuration
@EnableWebSecurity
class SecurityConfig {
	@Autowired
	private YawlResourceServiceConfig yawlResourceServiceConfig;

	@Autowired
	private AuthenticationManagerBuilder authenticationManagerBuilder;


	@Bean
	public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
		http.cors(withDefaults())
				.csrf().disable()
				.authorizeRequests().antMatchers("/api/**").hasAuthority("ROLE_ADMIN").anyRequest().permitAll()
				.and()
					.formLogin()
					.loginPage("/login")
					.usernameParameter("username")
					.passwordParameter("password")
					.successHandler(authenticationSuccessHandler())
					.failureHandler(authenticationFailureHandler())
					.permitAll()
				.and()
					.logout()
					.logoutUrl("/logout")
                    .logoutSuccessHandler(new HttpStatusReturningLogoutSuccessHandler(HttpStatus.OK))
					.permitAll()
				.and()
					.exceptionHandling()
					.authenticationEntryPoint(authenticationEntryPoint())
				// für h2 db
				.and()
					.headers()
					.frameOptions()
                    .disable();

		authenticationManagerBuilder.authenticationProvider(yawlAuthenticationProvider());

		return http.build();
	}


	@Bean
	protected UserDetailsService userDetailsService() {
		return new YawlUserDetailsService(yawlResourceServiceConfig.resourceManager());
	}


	@Bean
	protected YawlAuthenticationProvider yawlAuthenticationProvider() {
		return new YawlAuthenticationProvider(yawlResourceServiceConfig.resourceManager(), userDetailsService());
	}


	@Bean
	protected RestAuthenticationEntryPoint authenticationEntryPoint() {
		return new RestAuthenticationEntryPoint();
	}


	@Bean
	protected RestAuthenticationFailureHandler authenticationFailureHandler() {
		return new RestAuthenticationFailureHandler();
	}


	@Bean
	protected RestAuthenticationSuccessHandler authenticationSuccessHandler() {
		return new RestAuthenticationSuccessHandler();
	}

	@Bean
	public LogoutSuccessHandler logoutSuccessHandler() {
		return new RestLogoutSuccessHandler();
	}

	@Bean
	protected SessionDataHolder sessionDataHolder() {
		return new SessionDataHolder();
	}
}


