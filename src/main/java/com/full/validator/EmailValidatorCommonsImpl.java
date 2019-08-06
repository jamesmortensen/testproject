package com.full.validator;

import org.apache.commons.validator.routines.EmailValidator;

// https://commons.apache.org/proper/commons-validator/apidocs/org/apache/commons/validator/routines/EmailValidator.html
public class EmailValidatorCommonsImpl implements EmailValidatorable {

	private static final boolean ALLOW_LOCAL = true;
	private static final boolean ALLOW_TLD = true;
	
	public boolean isValidEmail(String email) {
		EmailValidator emailValidator = EmailValidator.getInstance(ALLOW_LOCAL, ALLOW_TLD);
		
		return emailValidator.isValid(email);		
	}
}
