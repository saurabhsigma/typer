import { faker } from 'https://esm.sh/@faker-js/faker';

        // Function to generate a random paragraph
        function getRandomParagraph(numSentences) {
            let paragraph = '';
            for (let i = 0; i < numSentences; i++) {
                paragraph += faker.lorem.sentence() + ' ';
            }
            return paragraph.trim(); // Ensure no extra space at the end
        }

        // Add event listener to the button
        document.getElementById("button").addEventListener("click", function () {
            const paragraph = getRandomParagraph(10);
            document.getElementById("main-content").innerText = paragraph;
        });