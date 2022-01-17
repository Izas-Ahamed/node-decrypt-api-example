const crypto = require("crypto");

const bcrypt = require("bcryptjs");

const privateKey =
    "-----BEGIN PRIVATE KEY-----\n" +
    "MIICdwIBADANBgkqhkiG9w0BAQEFAASCAmEwggJdAgEAAoGBAMY3iLzRuXDOJxnb\n" +
    "UAHFXiA/iugJn7wuNg7v4rV2BJf00gelg8VCWr50YP9I7u/J+ol3ztXZb8i+e443\n" +
    "bsVunHTnQV2hVYpS92M73C0LCXloWKv2jEgmZEkQzh9ZoYEWP/WbIiNH/nxm/NdR\n" +
    "+XBpvtCKDVZtVkTzF3bQZJIL40P5AgMBAAECgYALgVWygAnfflfOrGgsciRQgt+x\n" +
    "MD3RUm1Y2Ju0JLGHkHJQd076uCtEOsUWjEkyKesc55Nd3k0avdO2IYmQdCcol78Y\n" +
    "opDernn56Wgk7Nwb0tYwULorCc5Sjo/cwtO9ZjLyd8cP0uGqYsLCjUl4cc/PC32w\n" +
    "FrC4w6b8g5vuytR1sQJBAPBaiwfpJNbH8EuFUgPGWjlQ7k3GJcL1XcO3uBY3A+Uz\n" +
    "QU9YN13i5pycwuqDhoqSB4Td1uq1L7paXswfLohn08cCQQDTHsnflLDnAnfTZcX2\n" +
    "xaIUyInHS2Y54upvHKPrW2YuELJ/Xs+Eyr4j8EcCPlgE2DOqsDMI5pIZzG0s44LS\n" +
    "rKo/AkEAoY4Kk5endmLP5sNHPFhP/uSiOU6txRyOGObdarkx+hZ4mK+QD6BbJ/vK\n" +
    "nD0p6ux691jxg7Oj0Bu8SnHPIkq/swJBAJnByKCO+C+meoJ5kq3gzeR5EO8WmML7\n" +
    "4mU95JwamtZdzsI42MYLqmMeMXkO0qfklexwGxsWYb1sRu70W2j3250CQC/U2yY9\n" +
    "PPvHE85OWhW5iM1MQAhspHx/Ovhuu8FCDTsY6CsbAyn9QV4aG71wIv4NpF3G0CuE\n" +
    "REzvvzj8f76lMA0=\n" +
    "-----END PRIVATE KEY-----";

const rsaPrivateKey = {
    key: privateKey,
    passphrase: "",
    padding: crypto.constants.RSA_PKCS1_PADDING,
};
exports.decrypt = (value) => {
    return crypto
        .privateDecrypt(rsaPrivateKey, Buffer.from(value, "base64"))
        .toString("utf8");
};
