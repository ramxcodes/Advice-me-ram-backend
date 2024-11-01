import { Advice } from "../model/advice.model.js";

export const createAdvice = async (req, res) => {
    const { author, advice } = req.body;
    try {
        const newAdvice = new Advice({ author, advice });
        await newAdvice.save();
        res.status(201).json(newAdvice);  
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

export const getRandomAdvice = async (req, res) => {
    try {
        const [randomAdvice] = await Advice.aggregate([{ $sample: { size: 1 } }]);
        if (randomAdvice) {
            res.status(200).json(randomAdvice);
        } else {
            res.status(404).json({ message: 'No advice found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};