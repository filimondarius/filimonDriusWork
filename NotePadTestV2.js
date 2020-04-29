import NotePad from '../../pages/NotePad';

describe('NotePad', () => {

    var textToBeAdded = 'This is my automation test. I use this test to verify the find and replace feature';
    var replacedWord = 'test';
    var newWord = 'script';
    var textToBeAddedList = textToBeAdded.split(" ");
    var indexOfTheTextToBeAdded = textToBeAddedList.indexOf(replacedWord + '.');


    before(() => {
        browser.url('https://drive.google.com/');
    });

    it('Create google doc and change text', () => {
        NotePad.createNewGoogleDoc();
        NotePad.addTextInTheGoogleEditor(textToBeAdded);
        NotePad.replaceWordInText(replacedWord, newWord);

        var updatedText = NotePad.textEditor().getText();
        var updatedTextList = updatedText.split(" ");
        expect(updatedTextList[indexOfTheTextToBeAdded]).to.equal(newWord);
    });


});