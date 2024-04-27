const adminLogin = async (req, res) => {

    const users = {
        name:"ajith",
        age :15,
        prority:"Admin"
    }

    res.status(200).send(users)
};

const sample = async (req, res) => {
    const dataReceived = req.body;
    console.log(dataReceived);
};


export default sample;