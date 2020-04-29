import NotePad from '../../pages/NotePad';

describe('NotePad', () => {

    var textToBeAdded = 'This is my automation test. I use this test to verify the find and replace feature';
    var replacedWord = 'test';
    newWord = 'script';
    
    before(() => {
        browser.url('https://drive.google.com/');
    });

    it('Create google doc and change text', () => {
        NotePad.createNewGoogleDoc();
        NotePad.addTextInTheGoogleEditor(textToBeAdded);
        NotePad.replaceWordInText(replacedWord, newWord);

        expect(NotePad.textEditor().getText()).to.equal('This is my automation script. I use this test to verify the find and replace script');
    });
});