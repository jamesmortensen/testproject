package com.full.validator;

import javax.mail.internet.AddressException;
import javax.mail.internet.InternetAddress;

public class EmailValidatorJavaMailImpl implements EmailValidatorable {

	@Override
	public boolean isValidEmail(String email) {
		boolean isValid = false;
		try {
			InternetAddress internetAddress = new InternetAddress(email);
			internetAddress.validate();
			isValid = true;
		} catch (AddressException e) {
			isValid = false;
		}

		return isValid;
	}
}
