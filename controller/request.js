require('dotenv').config();


const home = async (req, res) => {
    res.render('index.html')
}

function sumDig(n) {
    let a = 0;
    while (n > 0) {
        a = a + n % 10;
        n = parseInt(n / 10, 10);
    }
    return a;
}

const login = async (req, res) => {
    let num = req.body;
    console.log(num)
    let  n = num.number;
    let s = n.toString();
    var len = s.length;
    console.log(len)

    if (len != 15)
        //   return console.log("invalid")
        return  res.json({ status: 'error', error: "Invalid IMEI Code"})
    else {
        let sum = 0;
        for (let i = len; i >= 1; i--) {
            let d = (n % 10);

            // Doubling every alternate digit
            if (i % 2 == 0)
                d = 2 * d;

            // Finding sum of the digits
            sum += sumDig(d);
            n = parseInt(n / 10, 10);
        }
        if (sum % 10 == 0) {
            return res.json({ status: 'ok', data: "valid IMEI Code"})
            // return console.log("valid")
        } else {
            return res.json({ status: 'error', error: "Invalid IMEI Code"})
            // return console.log("invalid")
        }
    }
}

module.exports = {
    home,
    login
};