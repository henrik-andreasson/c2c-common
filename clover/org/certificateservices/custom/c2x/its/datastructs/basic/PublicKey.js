var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":173,"id":1333,"methods":[{"el":59,"sc":2,"sl":57},{"el":72,"sc":2,"sl":68},{"el":81,"sc":2,"sl":80},{"el":88,"sc":2,"sl":86},{"el":96,"sc":2,"sl":94},{"el":106,"sc":2,"sl":101},{"el":116,"sc":2,"sl":109},{"el":126,"sc":2,"sl":118},{"el":142,"sc":2,"sl":128},{"el":163,"sc":2,"sl":144},{"el":170,"sc":2,"sl":165}],"name":"PublicKey","sl":45}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_114":{"methods":[{"sl":57},{"sl":68},{"sl":86},{"sl":94},{"sl":109}],"name":"Generate Enrollment Credential with a certificate chain as signer info","pass":true,"statements":[{"sl":58},{"sl":69},{"sl":70},{"sl":71},{"sl":87},{"sl":95},{"sl":111},{"sl":112},{"sl":115}]},"test_147":{"methods":[{"sl":68},{"sl":165}],"name":"Verify toString","pass":true,"statements":[{"sl":69},{"sl":70},{"sl":71},{"sl":167}]},"test_153":{"methods":[{"sl":109}],"name":"Verify serialization","pass":true,"statements":[{"sl":111},{"sl":112},{"sl":115}]},"test_160":{"methods":[{"sl":80},{"sl":109},{"sl":118}],"name":"Verify deserialization and serialization of reference ETSI Certificates works","pass":true,"statements":[{"sl":111},{"sl":112},{"sl":113},{"sl":115},{"sl":120},{"sl":121},{"sl":122},{"sl":124},{"sl":125}]},"test_163":{"methods":[{"sl":80},{"sl":109},{"sl":118}],"name":"Verify that serializeCertWithoutSignature encodes the certificate without the signature correcly","pass":true,"statements":[{"sl":111},{"sl":112},{"sl":113},{"sl":115},{"sl":120},{"sl":121},{"sl":122},{"sl":124},{"sl":125}]},"test_167":{"methods":[{"sl":57},{"sl":68},{"sl":128},{"sl":144}],"name":"Verify hashCode and equals","pass":true,"statements":[{"sl":58},{"sl":69},{"sl":70},{"sl":71},{"sl":130},{"sl":131},{"sl":132},{"sl":134},{"sl":138},{"sl":140},{"sl":141},{"sl":146},{"sl":148},{"sl":150},{"sl":152},{"sl":153},{"sl":156},{"sl":157},{"sl":158},{"sl":159},{"sl":160},{"sl":162}]},"test_173":{"methods":[{"sl":80},{"sl":94},{"sl":109},{"sl":118}],"name":"Verify SignSecuredMessage using signer info type: certificate generates a valid signature and that verifySecuredMessage can verify it.","pass":true,"statements":[{"sl":95},{"sl":111},{"sl":112},{"sl":113},{"sl":115},{"sl":120},{"sl":121},{"sl":122},{"sl":124},{"sl":125}]},"test_188":{"methods":[{"sl":86}],"name":"Verify the constructors and getters","pass":true,"statements":[{"sl":87}]},"test_191":{"methods":[{"sl":57},{"sl":68},{"sl":94},{"sl":109}],"name":"Generate Authorization Ticket and Signed Secured Message v1 for interoperability testing","pass":true,"statements":[{"sl":58},{"sl":69},{"sl":70},{"sl":71},{"sl":95},{"sl":111},{"sl":112},{"sl":115}]},"test_193":{"methods":[{"sl":109}],"name":"Verify getEncoded","pass":true,"statements":[{"sl":111},{"sl":112},{"sl":115}]},"test_196":{"methods":[{"sl":109}],"name":"Verify serialization","pass":true,"statements":[{"sl":111},{"sl":112},{"sl":115}]},"test_20":{"methods":[{"sl":80},{"sl":118}],"name":"Verify deserialization","pass":true,"statements":[{"sl":120},{"sl":121},{"sl":124},{"sl":125}]},"test_209":{"methods":[{"sl":57},{"sl":68},{"sl":86},{"sl":94},{"sl":109}],"name":"Generate Authorization Ticket with a digest as signer info","pass":true,"statements":[{"sl":58},{"sl":69},{"sl":70},{"sl":71},{"sl":87},{"sl":95},{"sl":111},{"sl":112},{"sl":115}]},"test_213":{"methods":[{"sl":109}],"name":"Verify serialization","pass":true,"statements":[{"sl":111},{"sl":112},{"sl":115}]},"test_218":{"methods":[{"sl":165}],"name":"Verify toString","pass":true,"statements":[{"sl":167}]},"test_22":{"methods":[{"sl":80},{"sl":94},{"sl":118}],"name":"Verify getVerificationKey","pass":true,"statements":[{"sl":95},{"sl":120},{"sl":121},{"sl":122},{"sl":124},{"sl":125}]},"test_222":{"methods":[{"sl":94},{"sl":109}],"name":"Generate Signed DENM Message and verify that all required fields are set and signature verifies.","pass":true,"statements":[{"sl":95},{"sl":111},{"sl":112},{"sl":115}]},"test_232":{"methods":[{"sl":57},{"sl":68},{"sl":86},{"sl":94},{"sl":109}],"name":"Generate Enrollment Credential with a certificate as signer info","pass":true,"statements":[{"sl":58},{"sl":69},{"sl":70},{"sl":71},{"sl":87},{"sl":95},{"sl":111},{"sl":112},{"sl":115}]},"test_236":{"methods":[{"sl":57},{"sl":68},{"sl":86},{"sl":94},{"sl":101},{"sl":109}],"name":"Generate RootCA with Encryption Key and Geographic region and verify that all attributes are set.","pass":true,"statements":[{"sl":58},{"sl":69},{"sl":70},{"sl":71},{"sl":87},{"sl":95},{"sl":102},{"sl":105},{"sl":111},{"sl":112},{"sl":113},{"sl":115}]},"test_241":{"methods":[{"sl":80},{"sl":118}],"name":"Verify that it is possible to parse a SecureMessage generate by interoperability site at https://werkzeug.dcaiti.tu-berlin.de/etsi/ts103097/","pass":true,"statements":[{"sl":120},{"sl":121},{"sl":124},{"sl":125}]},"test_243":{"methods":[{"sl":128},{"sl":144}],"name":"Verify hashCode and equals","pass":true,"statements":[{"sl":130},{"sl":131},{"sl":132},{"sl":134},{"sl":138},{"sl":140},{"sl":141},{"sl":146},{"sl":147},{"sl":148},{"sl":150},{"sl":152},{"sl":153},{"sl":156},{"sl":157}]},"test_246":{"methods":[{"sl":80},{"sl":94},{"sl":109},{"sl":118}],"name":"Verify signature of reference secure messages from interoperabiltity site at https://werkzeug.dcaiti.tu-berlin.de/etsi/ts103097/","pass":true,"statements":[{"sl":95},{"sl":111},{"sl":112},{"sl":115},{"sl":120},{"sl":121},{"sl":124},{"sl":125}]},"test_249":{"methods":[{"sl":80},{"sl":94},{"sl":109},{"sl":118}],"name":"Verify SignSecuredMessage using signer info type: certificate_digest_with_ecdsap256 generates a valid signature and that verifySecuredMessage can verify it.","pass":true,"statements":[{"sl":95},{"sl":111},{"sl":112},{"sl":113},{"sl":115},{"sl":120},{"sl":121},{"sl":122},{"sl":124},{"sl":125}]},"test_258":{"methods":[{"sl":57},{"sl":68},{"sl":80},{"sl":86},{"sl":94},{"sl":101}],"name":"Verify constructors and getters and setters","pass":true,"statements":[{"sl":58},{"sl":69},{"sl":70},{"sl":71},{"sl":87},{"sl":95},{"sl":102},{"sl":103},{"sl":105}]},"test_259":{"methods":[{"sl":57},{"sl":68},{"sl":86},{"sl":94},{"sl":109}],"name":"Generate Enrollment Credential with a digest as signer info","pass":true,"statements":[{"sl":58},{"sl":69},{"sl":70},{"sl":71},{"sl":87},{"sl":95},{"sl":111},{"sl":112},{"sl":115}]},"test_265":{"methods":[{"sl":94},{"sl":109}],"name":"Generate Signed CAM Unrecognized Certificates Message and verify that all required fields are set and signature verifies.","pass":true,"statements":[{"sl":95},{"sl":111},{"sl":112},{"sl":115}]},"test_270":{"methods":[{"sl":57},{"sl":68},{"sl":86},{"sl":94},{"sl":109}],"name":"Generate RootCA without Encryption Key and Geographic region and verify that all other attributes are set.","pass":true,"statements":[{"sl":58},{"sl":69},{"sl":70},{"sl":71},{"sl":87},{"sl":95},{"sl":111},{"sl":112},{"sl":115}]},"test_283":{"methods":[{"sl":94},{"sl":109}],"name":"Generate Signed CAM Message with and verify that all required fields are set and signature verifies.","pass":true,"statements":[{"sl":95},{"sl":111},{"sl":112},{"sl":115}]},"test_29":{"methods":[{"sl":80},{"sl":94},{"sl":118}],"name":"Verify deserialization","pass":true,"statements":[{"sl":95},{"sl":120},{"sl":121},{"sl":124},{"sl":125}]},"test_303":{"methods":[{"sl":57},{"sl":68},{"sl":109}],"name":"Verify serialization of PublicKey","pass":true,"statements":[{"sl":58},{"sl":69},{"sl":70},{"sl":71},{"sl":111},{"sl":112},{"sl":113},{"sl":115}]},"test_32":{"methods":[{"sl":57},{"sl":68},{"sl":94},{"sl":109}],"name":"Generate Authorization CA v1 for interoperability testing","pass":true,"statements":[{"sl":58},{"sl":69},{"sl":70},{"sl":71},{"sl":95},{"sl":111},{"sl":112},{"sl":115}]},"test_339":{"methods":[{"sl":86},{"sl":94},{"sl":109}],"name":"verify that encryptSecureMessage and decryptSecureMessage encrypts and decrypts correctly","pass":true,"statements":[{"sl":87},{"sl":95},{"sl":111},{"sl":112},{"sl":113},{"sl":115}]},"test_351":{"methods":[{"sl":80},{"sl":118}],"name":"Verify deserialization","pass":true,"statements":[{"sl":120},{"sl":121},{"sl":124},{"sl":125}]},"test_367":{"methods":[{"sl":57},{"sl":68},{"sl":94},{"sl":109}],"name":"Generate Enrollment Credential v1 for interoperability testing","pass":true,"statements":[{"sl":58},{"sl":69},{"sl":70},{"sl":71},{"sl":95},{"sl":111},{"sl":112},{"sl":113},{"sl":115}]},"test_39":{"methods":[{"sl":57},{"sl":68},{"sl":86},{"sl":94},{"sl":109}],"name":"Generate Enrollment Authority and verify that it is signed by the Root CA","pass":true,"statements":[{"sl":58},{"sl":69},{"sl":70},{"sl":71},{"sl":87},{"sl":95},{"sl":111},{"sl":112},{"sl":115}]},"test_396":{"methods":[{"sl":57},{"sl":68},{"sl":86},{"sl":94},{"sl":109}],"name":"Generate Authorization Credential with a certificate chain as signer info","pass":true,"statements":[{"sl":58},{"sl":69},{"sl":70},{"sl":71},{"sl":87},{"sl":95},{"sl":111},{"sl":112},{"sl":115}]},"test_398":{"methods":[{"sl":57},{"sl":68},{"sl":86},{"sl":94},{"sl":109}],"name":"Generate Authorization Authority and verify that it is signed by the Root CA","pass":true,"statements":[{"sl":58},{"sl":69},{"sl":70},{"sl":71},{"sl":87},{"sl":95},{"sl":111},{"sl":112},{"sl":115}]},"test_401":{"methods":[{"sl":80},{"sl":86},{"sl":94},{"sl":109},{"sl":118}],"name":"Verify that signAndEncryptSecureMessage and verifyAndDecryptSecuredMessage both encrypts and signs properly","pass":true,"statements":[{"sl":87},{"sl":95},{"sl":111},{"sl":112},{"sl":113},{"sl":115},{"sl":120},{"sl":121},{"sl":122},{"sl":124},{"sl":125}]},"test_402":{"methods":[{"sl":165}],"name":"Verify toString","pass":true,"statements":[{"sl":167}]},"test_51":{"methods":[{"sl":80},{"sl":86},{"sl":118}],"name":"Verify getEncryptionKey","pass":true,"statements":[{"sl":87},{"sl":120},{"sl":121},{"sl":122},{"sl":124},{"sl":125}]},"test_52":{"methods":[{"sl":80},{"sl":109},{"sl":118}],"name":"Verify that findRecipientInfo find correct RecipientInfo","pass":true,"statements":[{"sl":111},{"sl":112},{"sl":113},{"sl":115},{"sl":120},{"sl":121},{"sl":122},{"sl":124},{"sl":125}]},"test_66":{"methods":[{"sl":57},{"sl":68},{"sl":86},{"sl":94},{"sl":109}],"name":"Generate Authorization Ticket with a certificate as signer info","pass":true,"statements":[{"sl":58},{"sl":69},{"sl":70},{"sl":71},{"sl":87},{"sl":95},{"sl":111},{"sl":112},{"sl":115}]},"test_74":{"methods":[{"sl":80},{"sl":86},{"sl":94},{"sl":101},{"sl":118}],"name":"Verify deserialization of PublicKey","pass":true,"statements":[{"sl":87},{"sl":95},{"sl":102},{"sl":103},{"sl":120},{"sl":121},{"sl":124},{"sl":125}]},"test_96":{"methods":[{"sl":80},{"sl":94},{"sl":109},{"sl":118}],"name":"Test to verifyCertificate","pass":true,"statements":[{"sl":95},{"sl":111},{"sl":112},{"sl":113},{"sl":115},{"sl":120},{"sl":121},{"sl":122},{"sl":124},{"sl":125}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [303, 191, 232, 114, 236, 396, 259, 66, 270, 367, 167, 32, 398, 39, 258, 209], [303, 191, 232, 114, 236, 396, 259, 66, 270, 367, 167, 32, 398, 39, 258, 209], [], [], [], [], [], [], [], [], [], [303, 191, 232, 114, 236, 147, 396, 259, 66, 270, 367, 167, 32, 398, 39, 258, 209], [303, 191, 232, 114, 236, 147, 396, 259, 66, 270, 367, 167, 32, 398, 39, 258, 209], [303, 191, 232, 114, 236, 147, 396, 259, 66, 270, 367, 167, 32, 398, 39, 258, 209], [303, 191, 232, 114, 236, 147, 396, 259, 66, 270, 367, 167, 32, 398, 39, 258, 209], [], [], [], [], [], [], [], [], [160, 241, 74, 249, 20, 246, 401, 173, 258, 351, 96, 29, 52, 163, 51, 22], [], [], [], [], [], [232, 114, 236, 74, 396, 259, 66, 270, 339, 398, 39, 401, 258, 209, 51, 188], [232, 114, 236, 74, 396, 259, 66, 270, 339, 398, 39, 401, 258, 209, 51, 188], [], [], [], [], [], [], [191, 222, 232, 114, 265, 236, 74, 396, 259, 66, 249, 270, 367, 283, 339, 32, 398, 39, 246, 401, 173, 258, 96, 29, 209, 22], [191, 222, 232, 114, 265, 236, 74, 396, 259, 66, 249, 270, 367, 283, 339, 32, 398, 39, 246, 401, 173, 258, 96, 29, 209, 22], [], [], [], [], [], [236, 74, 258], [236, 74, 258], [74, 258], [], [236, 258], [], [], [], [303, 191, 222, 232, 114, 213, 265, 236, 160, 396, 193, 259, 153, 66, 249, 270, 367, 283, 339, 32, 398, 39, 246, 401, 196, 173, 96, 209, 52, 163], [], [303, 191, 222, 232, 114, 213, 265, 236, 160, 396, 193, 259, 153, 66, 249, 270, 367, 283, 339, 32, 398, 39, 246, 401, 196, 173, 96, 209, 52, 163], [303, 191, 222, 232, 114, 213, 265, 236, 160, 396, 193, 259, 153, 66, 249, 270, 367, 283, 339, 32, 398, 39, 246, 401, 196, 173, 96, 209, 52, 163], [303, 236, 160, 249, 367, 339, 401, 173, 96, 52, 163], [], [303, 191, 222, 232, 114, 213, 265, 236, 160, 396, 193, 259, 153, 66, 249, 270, 367, 283, 339, 32, 398, 39, 246, 401, 196, 173, 96, 209, 52, 163], [], [], [160, 241, 74, 249, 20, 246, 401, 173, 351, 96, 29, 52, 163, 51, 22], [], [160, 241, 74, 249, 20, 246, 401, 173, 351, 96, 29, 52, 163, 51, 22], [160, 241, 74, 249, 20, 246, 401, 173, 351, 96, 29, 52, 163, 51, 22], [160, 249, 401, 173, 96, 52, 163, 51, 22], [], [160, 241, 74, 249, 20, 246, 401, 173, 351, 96, 29, 52, 163, 51, 22], [160, 241, 74, 249, 20, 246, 401, 173, 351, 96, 29, 52, 163, 51, 22], [], [], [167, 243], [], [167, 243], [167, 243], [167, 243], [], [167, 243], [], [], [], [167, 243], [], [167, 243], [167, 243], [], [], [167, 243], [], [167, 243], [243], [167, 243], [], [167, 243], [], [167, 243], [167, 243], [], [], [167, 243], [167, 243], [167], [167], [167], [], [167], [], [], [402, 147, 218], [], [402, 147, 218], [], [], [], [], [], []]