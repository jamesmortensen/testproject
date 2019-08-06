package com.full.validator;

import org.apache.log4j.Logger;
import org.junit.Test;

import junit.framework.TestCase;
//https://haacked.com/archive/2007/08/21/i-knew-how-to-validate-an-email-address-until-i.aspx/

//import static com.full.validator.EmailValidatorJavaMailImpl.emailValidator.isValidEmail;

public class EmailValidatorTest extends TestCase {

	private final static Logger log = Logger.getLogger(EmailValidatorTest.class);
	
	private static final boolean VALID = true;
	private static final boolean NOT_VALID = false;
	private static final boolean RFC_COMPLIANT = true;
	
	private static final String OWASP_REGEX = "^[a-zA-Z0-9_+&*-]+(?:\\.[a-zA-Z0-9_+&*-]+)*@(?:[a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,7}$";
	
	private EmailValidatorable emailValidator;
	
	private EmailTestCase[] emailTestCases = {
			new EmailTestCase("james.mortensen@anywhere.co", VALID),
			new EmailTestCase("jem@a-cti.com", VALID),
			new EmailTestCase("adfsdfsdaf@afdsdafsa.asdfsdf.c", NOT_VALID), // is this valid or not? Not sure?
			new EmailTestCase("james@full.io", VALID),
			new EmailTestCase("j@j.c", NOT_VALID),
			new EmailTestCase("james", NOT_VALID),
			new EmailTestCase("james.mortensen+hello@anywhere.co", VALID),
			new EmailTestCase("kevino'brian@setmore.com", VALID),
			new EmailTestCase("bea.o'malley@aus.gov.au", VALID),
			new EmailTestCase("james@teachy.ch", VALID),
			new EmailTestCase("james@10.5.10.20", VALID),
			new EmailTestCase("1234567890@domain.com", VALID),
			new EmailTestCase("email@domain-one.com", VALID),
			new EmailTestCase("_______@domain.com", VALID),
			new EmailTestCase("email@domain.name", VALID),
			new EmailTestCase("zpl-bk-an@gb-server01.de", VALID),
			new EmailTestCase("james@answerforce.com.global", VALID),
			new EmailTestCase("james@answerforce.com.", NOT_VALID)
			
			
	};


	@Test
	public void testEmails() {
		emailValidator = new EmailValidatorJavaMailImpl();
		emailsWithSpecificValidator();
		emailValidator = new EmailValidatorCommonsImpl();
		emailsWithSpecificValidator();
		
		log.debug("Testing RFC2822 validator not RFC_COMPLIANT");
		emailValidator = new EmailValidatorRFC2822( ! RFC_COMPLIANT);
		emailsWithSpecificValidator();
		log.debug("Testing RFC2822 validator RFC_COMPLIANT enabled");
		emailValidator = new EmailValidatorRFC2822(RFC_COMPLIANT);
		emailsWithSpecificValidator();
		
		emailValidator = new EmailValidatorRegexBased(OWASP_REGEX);
		emailsWithSpecificValidator();
//		emailValidator = new EmailValidatorRegexBased(OWASP_REGEX);
//		emailsWithSpecificValidator();
		
		// Regular expression from Navaneeth
		String navaneethRegex = "^.+\\@.+\\..+$";
		emailValidator = new EmailValidatorRegexBased(navaneethRegex);
		log.debug("Testing with " + navaneethRegex);
		emailsWithSpecificValidator();
	}
	
	private void printTestResult(String emailAddressTestCase, boolean shouldBeValid) {
		boolean result = emailValidator.isValidEmail(emailAddressTestCase);
		if(shouldBeValid) {
			if(result) 
				log.debug("pass - " + emailAddressTestCase + " is valid.");
			else {
				log.error("fail - " + emailAddressTestCase + " " + "should be valid but was marked not valid");
			}
			
		} else {
			if(! result)
				log.debug("pass - " + emailAddressTestCase + " is not valid.");
			else {
				log.error("fail - " + emailAddressTestCase + " " + "should be not valid but was marked valid");
			}
			
		}
		//assertEquals(result, shouldBeValid);
	}
	
	private void emailsWithSpecificValidator() {
		
		log.debug("\n\ndebug logging enabled...");
		
		log.debug("Testing " + emailValidator.getClass().getName());
		
		for(EmailTestCase e : emailTestCases) {
			printTestResult(e.emailAddress, e.shouldBeValid);
			
		}
	}
	
	class EmailTestCase {
		
		EmailTestCase(String e, boolean s) {
			emailAddress = e;
			shouldBeValid = s;
		}
		String emailAddress;
		boolean shouldBeValid = false;
	}
}
