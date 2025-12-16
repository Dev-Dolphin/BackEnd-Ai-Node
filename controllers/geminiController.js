const { GoogleGenerativeAI } = require('@google/generative-ai');

// Initialize the Google Generative AI model
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-pro' });

// @desc    Generate content with Gemini
// @route   POST /api/generate
// @access  Public
const generateContent = async (req, res, next) => {
  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({ success: false, message: 'Please provide a prompt' });
    }

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    res.status(200).json({
      success: true,
      data: text,
    });
  } catch (error) {
    console.error('Error with Gemini API:', error);
    next(error);
  }
};

module.exports = {
  generateContent,
};
