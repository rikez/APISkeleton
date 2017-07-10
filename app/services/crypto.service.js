const crypto = require('crypto')

exports.cryptograph = () => {
    const _contentToBeHashed = (content) => {
        return crypto.createHash("MD5").update(content).digest('hex');
    }

    return {
        hashedContent: _contentToBeHashed
    }
}