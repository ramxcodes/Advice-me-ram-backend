import { Advice } from "../model/advice.model.js";
let recentAdviceIds = [];
const MAX_RECENT_IDS = 10;

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
        
        const randomAdvice = await Advice.aggregate([
            { $match: { _id: { $nin: recentAdviceIds } } },
            { $sample: { size: 1 } }
        ]);
        if (randomAdvice.length > 0) {
            const advice = randomAdvice[0];
            recentAdviceIds.push(advice._id);
            if (recentAdviceIds.length > MAX_RECENT_IDS) {
                recentAdviceIds.shift();
            }
            res.status(200).json(advice);
        } else {
            recentAdviceIds = [];
            res.status(404).json({ message: 'No unique advice available at the moment. Please try again later.' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};


export const createMultipleAdvice = async (req, res) => {
    const advices = req.body; // Expecting an array of advice objects
    try {
        if (!Array.isArray(advices)) {
            return res.status(400).json({ message: 'Invalid input format. Expected an array of advice objects.' });
        }

        const newAdvices = await Advice.insertMany(advices);
        res.status(201).json(newAdvices);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};