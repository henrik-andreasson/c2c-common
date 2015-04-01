var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":70,"id":2968,"methods":[{"el":52,"sc":2,"sl":50},{"el":56,"sc":2,"sl":54},{"el":68,"sc":2,"sl":61}],"name":"HeaderFieldType","sl":37}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_1":{"methods":[{"sl":54}],"name":"Generate Signed CAM Unrecognized Certificates Message and verify that all required fields are set and signature verifies.","pass":true,"statements":[{"sl":55}]},"test_101":{"methods":[{"sl":61}],"name":"Verify that TrailerFieldType.getByValue returns generation_time for 0","pass":true,"statements":[{"sl":62},{"sl":63},{"sl":64}]},"test_13":{"methods":[{"sl":54}],"name":"Generate Signed DENM Message and verify that all required fields are set and signature verifies.","pass":true,"statements":[{"sl":55}]},"test_133":{"methods":[{"sl":54}],"name":"Verify getEncoded","pass":true,"statements":[{"sl":55}]},"test_138":{"methods":[{"sl":61}],"name":"Verify deserialization","pass":true,"statements":[{"sl":62},{"sl":63},{"sl":64}]},"test_148":{"methods":[{"sl":54},{"sl":61}],"name":"Verify SignSecuredMessage using signer info type: certificate generates a valid signature and that verifySecuredMessage can verify it.","pass":true,"statements":[{"sl":55},{"sl":62},{"sl":63},{"sl":64}]},"test_154":{"methods":[{"sl":54}],"name":"Verify serialization","pass":true,"statements":[{"sl":55}]},"test_157":{"methods":[{"sl":54}],"name":"Verify that message_type has bytevalue 5","pass":true,"statements":[{"sl":55}]},"test_174":{"methods":[{"sl":61}],"name":"Verify that TrailerFieldType.getByValue returns encryption_parameters for 130","pass":true,"statements":[{"sl":62},{"sl":63},{"sl":64}]},"test_199":{"methods":[{"sl":61}],"name":"Verify that TrailerFieldType.getByValue returns generation_location for 3","pass":true,"statements":[{"sl":62},{"sl":63},{"sl":64}]},"test_215":{"methods":[{"sl":61}],"name":"Verify that TrailerFieldType.getByValue returns recipient_info for 129","pass":true,"statements":[{"sl":62},{"sl":63},{"sl":64}]},"test_232":{"methods":[{"sl":54},{"sl":61}],"name":"Verify that signAndEncryptSecureMessage and verifyAndDecryptSecuredMessage both encrypts and signs properly","pass":true,"statements":[{"sl":55},{"sl":62},{"sl":63},{"sl":64}]},"test_241":{"methods":[{"sl":54}],"name":"Verify serialization","pass":true,"statements":[{"sl":55}]},"test_247":{"methods":[{"sl":54}],"name":"Verify that generation_time_confidence has bytevalue 1","pass":true,"statements":[{"sl":55}]},"test_26":{"methods":[{"sl":54}],"name":"Generate Authorization Ticket and Signed Secured Message v1 for interoperability testing","pass":true,"statements":[{"sl":55}]},"test_27":{"methods":[{"sl":54},{"sl":61}],"name":"Verify SignSecuredMessage using signer info type: certificate_digest_with_ecdsap256 generates a valid signature and that verifySecuredMessage can verify it.","pass":true,"statements":[{"sl":55},{"sl":62},{"sl":63},{"sl":64}]},"test_277":{"methods":[{"sl":54}],"name":"Generate Signed CAM Message with and verify that all required fields are set and signature verifies.","pass":true,"statements":[{"sl":55}]},"test_302":{"methods":[{"sl":54}],"name":"Verify that generation_time has bytevalue 0","pass":true,"statements":[{"sl":55}]},"test_305":{"methods":[{"sl":54}],"name":"Verify that recipient_info has bytevalue 129","pass":true,"statements":[{"sl":55}]},"test_317":{"methods":[{"sl":54}],"name":"Verify that request_unrecognized_certificate has bytevalue 4","pass":true,"statements":[{"sl":55}]},"test_34":{"methods":[{"sl":54}],"name":"Verify that signer_info has bytevalue 128","pass":true,"statements":[{"sl":55}]},"test_343":{"methods":[{"sl":54}],"name":"Verify that addHeader adds the header value in correct order","pass":true,"statements":[{"sl":55}]},"test_351":{"methods":[{"sl":61}],"name":"Verify that TrailerFieldType.getByValue returns generation_time_confidence for 1","pass":true,"statements":[{"sl":62},{"sl":63},{"sl":64}]},"test_352":{"methods":[{"sl":54}],"name":"Verify that generation_location has bytevalue 3","pass":true,"statements":[{"sl":55}]},"test_357":{"methods":[{"sl":54},{"sl":61}],"name":"verify that encryptSecureMessage and decryptSecureMessage encrypts and decrypts correctly","pass":true,"statements":[{"sl":55},{"sl":62},{"sl":63},{"sl":64}]},"test_361":{"methods":[{"sl":61}],"name":"Verify that TrailerFieldType.getByValue returns message_type for 5","pass":true,"statements":[{"sl":62},{"sl":63},{"sl":64}]},"test_376":{"methods":[{"sl":54},{"sl":61}],"name":"Verify signature of reference secure messages from interoperabiltity site at https://werkzeug.dcaiti.tu-berlin.de/etsi/ts103097/","pass":true,"statements":[{"sl":55},{"sl":62},{"sl":63},{"sl":64}]},"test_380":{"methods":[{"sl":54}],"name":"Verify that serializeDataToBeSignedInSecuredMessage serializes according to signature verification it ETSI specifification","pass":true,"statements":[{"sl":55}]},"test_407":{"methods":[{"sl":61}],"name":"Verify that TrailerFieldType.getByValue returns signer_info for 128","pass":true,"statements":[{"sl":62},{"sl":63},{"sl":64}]},"test_55":{"methods":[{"sl":61}],"name":"Verify that TrailerFieldType.getByValue returns expiration for 2","pass":true,"statements":[{"sl":62},{"sl":63},{"sl":64}]},"test_6":{"methods":[{"sl":61}],"name":"Verify that it is possible to parse a SecureMessage generate by interoperability site at https://werkzeug.dcaiti.tu-berlin.de/etsi/ts103097/","pass":true,"statements":[{"sl":62},{"sl":63},{"sl":64}]},"test_86":{"methods":[{"sl":54}],"name":"Verify that encryption_parameters has bytevalue 130","pass":true,"statements":[{"sl":55}]},"test_87":{"methods":[{"sl":61}],"name":"Verify deserialization","pass":true,"statements":[{"sl":62},{"sl":63},{"sl":64}]},"test_95":{"methods":[{"sl":61}],"name":"Verify that TrailerFieldType.getByValue returns request_unrecognized_certificate for 4","pass":true,"statements":[{"sl":62},{"sl":63},{"sl":64}]},"test_97":{"methods":[{"sl":54}],"name":"Verify that expiration has bytevalue 2","pass":true,"statements":[{"sl":55}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [302, 277, 357, 247, 154, 380, 26, 232, 305, 352, 133, 13, 1, 27, 241, 317, 86, 157, 148, 34, 97, 376, 343], [302, 277, 357, 247, 154, 380, 26, 232, 305, 352, 133, 13, 1, 27, 241, 317, 86, 157, 148, 34, 97, 376, 343], [], [], [], [], [], [357, 95, 199, 138, 351, 6, 232, 101, 407, 27, 215, 55, 361, 148, 376, 87, 174], [357, 95, 199, 138, 351, 6, 232, 101, 407, 27, 215, 55, 361, 148, 376, 87, 174], [357, 95, 199, 138, 351, 6, 232, 101, 407, 27, 215, 55, 361, 148, 376, 87, 174], [357, 95, 199, 138, 351, 6, 232, 101, 407, 27, 215, 55, 361, 148, 376, 87, 174], [], [], [], [], [], []]
