/************************************************************************
*                                                                       *
*  Certificate Service -  Car2Car Core                                  *
*                                                                       *
*  This software is free software; you can redistribute it and/or       *
*  modify it under the terms of the GNU Affero General Public License   *
*  License as published by the Free Software Foundation; either         *
*  version 3   of the License, or any later version.                    *
*                                                                       *
*  See terms of license at gnu.org.                                     *
*                                                                       *
*************************************************************************/
package org.certificateservices.custom.c2x.ieee1609dot2.generator.receiver;

import java.io.IOException;
import java.security.GeneralSecurityException;

import javax.crypto.SecretKey;

import org.certificateservices.custom.c2x.common.crypto.AlgorithmIndicator;
import org.certificateservices.custom.c2x.ieee1609dot2.crypto.Ieee1609Dot2CryptoManager;
import org.certificateservices.custom.c2x.ieee1609dot2.datastructs.basic.HashedId8;
import org.certificateservices.custom.c2x.ieee1609dot2.datastructs.enc.RecipientInfo;

/**
 * Generic interface for a receiver used during decryption.
 * <p>
 * A Recipient interface is used when sending data to others, Receiver is used when receiving data from others.
 *  
 * @author Philip Vendil p.vendil@cgi.com
 */
public interface Receiver {

	/**
	 * @param alg algorithm scheme used.
	 * @param cryptoManager the used cryptomanager
	 * @return a hashedId8 reference to the reciever, calculated according to the type of related data.
	 * 
	 * @throws IllegalArgumentException if fault was discovered in supplied parameters.
	 * @throws GeneralSecurityException if internal problems occurred generating the reference id.
	 */
	HashedId8 getReference(AlgorithmIndicator alg, Ieee1609Dot2CryptoManager cryptoManager) throws IllegalArgumentException, GeneralSecurityException, IOException;
	
	/**
	 * Method to extract decryption key from a RecipientInfo using the reciever data.
	 * 
	 * @param cryptoManager the used cryptomanager
	 * @return the decryption key inside the receiver info envelope.
	 * 
	 * @throws IllegalArgumentException if fault was discovered in supplied parameters.
	 * @throws GeneralSecurityException if internal problems occurred decrypting the decryption key.
	 * @throws IOException if IO exception occurred communicating with underlying systems
	 */
	SecretKey extractDecryptionKey(Ieee1609Dot2CryptoManager cryptoManager, RecipientInfo recipientInfo) throws IllegalArgumentException, GeneralSecurityException, IOException;
}
