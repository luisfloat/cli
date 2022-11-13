'use strict';
const React = require('react');
const { Text, Box, useInput, Newline } = require('ink');
const tokens = require('lfds-tokens');
const { color } = tokens;

const boxenOptions = {
	paddingX: 3,
	paddingY: 1,
    width: 54,
    borderColor: color.gray[2],
	borderStyle: "single",
};

function Counter() {
	useInput((input) => {
		if(input === 'q') {
			console.log("\n");
			process.exit();
		}
	});

	return (
		<Box {...boxenOptions}>
			<Text color={color.white}>
				<Text color={color.azure[5]}>Luis Float</Text>
				<Newline/>
				<Newline/>
				<Text>Hey there, it's Luis! I'm interested in Software Engineering. Currently learning Web Technologies.</Text>
				<Newline/>
				<Newline/>
				<Text>You can reach me at:</Text>
				<Newline/>
				<Newline/>
				<Text>GitHub     </Text><Text color={color.azure[5]}>https://github.com/luisfloat</Text>
				<Newline/>
				<Text>Twitter    </Text><Text color={color.azure[5]}>https://twitter.com/luisfloat</Text>
			</Text>
		</Box>
	);
};

module.exports = Counter;
