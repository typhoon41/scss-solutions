module.exports = {
    "roots": [
        "<rootDir>/tests/"
    ],
    "setupFiles": [],
    "transform": {},
    "transformIgnorePatterns": [
        "<rootDir>/node_modules/"
    ],
    "testMatch": ["**/tests/*.js"],
    "testPathIgnorePatterns": [
        "<rootDir>/node_modules/",
    ],
    "testEnvironment": 'jest-environment-node',
    "moduleFileExtensions": [
        "js"
    ]
}