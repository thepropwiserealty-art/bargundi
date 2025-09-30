import crypto from 'crypto';

export default function generateUserCoupon(phoneno: string) : string{
    const date = new Date();
    const dd = String(date.getDate()).padStart(2, '0');
    const mm = String(date.getMonth() + 1).padStart(2, '0');

    // short hash of user ID
    const userHash = crypto.createHash('sha256')
        .update(phoneno + Date.now().toString())
        .digest('hex')
        .slice(0, 6); // take first 6 chars

    return `PWC${dd}${mm}${userHash.toUpperCase()}`;
}
