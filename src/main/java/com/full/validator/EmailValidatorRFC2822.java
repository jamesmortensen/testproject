package com.full.validator;

import org.hazlewood.connor.bottema.emailaddress.EmailAddressCriteria;
import org.hazlewood.connor.bottema.emailaddress.EmailAddressValidator;

// https://github.com/bbottema/email-rfc2822-validator
public class EmailValidatorRFC2822 implements EmailValidatorable {

	private boolean rfcCompliant = true;

	public EmailValidatorRFC2822(boolean rfcCompliant) {
		this.rfcCompliant = rfcCompliant;
	}

	@Override
	public boolean isValidEmail(String email) {
		if (rfcCompliant)
			return EmailAddressValidator.isValid(email, EmailAddressCriteria.RFC_COMPLIANT);
		else
			return EmailAddressValidator.isValid(email);
	}

}
