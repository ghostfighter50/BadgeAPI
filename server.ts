import express, { Request, Response } from 'express';
import fs from 'fs';

const PORT = 80;
const file = './database/badges.json';

console.log(PORT)

interface IBadgesData {
    [badgeName: string]: string;
}

let badgesData: IBadgesData = {};

// Read data from the file
try {
    const fileData = fs.readFileSync(file).toString();
    badgesData = JSON.parse(fileData);

    if (typeof badgesData !== 'object') {
        console.error('Data in badges.json is not an object. Initializing as an empty object.');
        badgesData = {};
    }
} catch (error) {
    console.error('Error reading badges JSON file:', error);
}

const app = express();
app.use(express.json());

/**
 * Get badge by name.
 * @param {Request} req - Express request object.
 * @param {Response} res - Express response object.
 * @returns {void}
 */
app.get('/api/badges/:id', (req: Request, res: Response) => {
    try {
        const badgeId = req.params.id;
        const badgeToFind = Object.entries(badgesData).find(([name, id]) => id === badgeId);

        if (!badgeToFind) {
            return res.status(404).json({ status: 'NOT FOUND', message: 'Badge not found' });
        }
        return res.status(200).json({ status: 'OK', id: badgeId });
    } catch (error: any) {
        return res.status(500).json({ status: 'ERROR', id: null });
    }
});

/**
 * Add a new badge.
 * @param {Request} req - Express request object.
 * @param {Response} res - Express response object.
 * @returns {void}
 */
app.post('/api/badges', (req: Request, res: Response) => {
    console.log(req.body);

    /**
     * Validate request body.
     * @type {string}
     */
    const name: string = req.body.name;
    /**
     * Validate request body.
     * @type {string}
     */
    const id: string = req.body.id;

    if (!name || typeof name !== 'string') return res.status(400).json({ status: 'BAD REQUEST', message: 'name field (string) is required' });
    if (!id || typeof id !== 'string') return res.status(400).json({ status: 'BAD REQUEST', message: 'id field (string) is required' });

    // Add the new badge to the object
    badgesData[name] = id;

    // Write the updated data back to the file
    fs.writeFileSync(file, JSON.stringify(badgesData, null, 2));

    res.status(201).json({ status: 'CREATED', message: 'Badge added successfully' });
});

/**
 * Delete a badge by ID.
 * @param {Request} req - Express request object.
 * @param {Response} res - Express response object.
 * @returns {void}
 */
app.delete('/api/badges/:id', (req: Request, res: Response) => {
    /**
     * ID of the badge to be deleted.
     * @type {string}
     */
    const idToDelete: string = req.params.id;

    // Find the badge by ID
    const badgeToDelete = Object.entries(badgesData).find(([name, id]) => id === idToDelete);

    if (!badgeToDelete) {
        return res.status(404).json({ status: 'NOT FOUND', message: 'Badge not found' });
    }

    const [nameToDelete] = badgeToDelete;

    // Delete the badge by name
    delete badgesData[nameToDelete];

    // Write the updated data back to the file
    fs.writeFileSync(file, JSON.stringify(badgesData, null, 2));

    res.status(200).json({ status: 'DELETED', message: 'Badge deleted successfully' });
});

app.listen(PORT, () => {
    console.log(`[+] Server is running on port ${PORT}`);
});
