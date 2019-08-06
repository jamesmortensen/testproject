package com.full.validator;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.apache.log4j.Logger;

public class EmailValidatorRegexBased implements EmailValidatorable {

	private final static Logger log = Logger.getLogger(EmailValidatorRegexBased.class);

	// OWASP - https://www.owasp.org/index.php/OWASP_Validation_Regex_Repository
	private String emailRegex = "^[a-zA-Z0-9_+&*-]+(?:\\.[a-zA-Z0-9_+&*-]+)*@(?:[a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,7}$";
	private Pattern emailRegexPattern;

	/**
	 * Constructs an Email Address validator using the given pattern.
	 * 
	 * WARNING: Be sure to use a regex pattern created by a standards-body and avoid
	 * using home-grown versions.
	 * 
	 * Default value is to use the OWASP standard.
	 * 
	 * @param emailRegex
	 */
	public EmailValidatorRegexBased(String emailRegex) {
		constructEmailRegexPattern(emailRegex);
	}

	public EmailValidatorRegexBased() {
		log.info("No validation implementation passed to constructor. So we're using the default OWASP Regex...");
		constructEmailRegexPattern(emailRegex);
	}

	private void constructEmailRegexPattern(String emailRegex) {
		this.emailRegex = emailRegex;
		emailRegexPattern = Pattern.compile(emailRegex);
	}

	@Override
	public boolean isValidEmail(String email) {
		if (email == null) {
			return false;
		}

		Matcher matcher = emailRegexPattern.matcher(email);
		return matcher.matches();
	}

}
