const Menu = require("../models/menuSchema.js");

const createMenu = async (req, res) => {
    const { name, description, price } = req.body;

    if (!name || !description || !price) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    try {
        const menu = new Menu({ name, description, price });
        await menu.save();
        res.status(201).json({ message: 'Menu item created successfully', menu });
    } catch (error) {
        console.error("Error creating menu item:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

const getMenu = async (req, res) => {
    try {
        const menuItems = await Menu.find();
        res.status(200).json(menuItems);
    } catch (error) {
        console.error("Error fetching menu items:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = { createMenu, getMenu };
