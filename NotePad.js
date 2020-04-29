class NotePad {

    get newButton() {
        return $('newDocumentButton');
    }

    get googleDocsOption() {
        return $('button=googleDocs');
    }

    get textEditor() {
        return $('textEditorGoogle');
    }

    get editButton(){
        return $('button=Edit');
    }

    get replaceWordButton(){
        return $('button=Replace');
    }

    get replacedWordField(){
        return $('input[name=Replaced Word]');
    }

    get newWordField(){
        return $('input[name=New Word]');
    }

    get replaceActionButton(){
        return $('button=Perform replace');
    }

    get closeFindAndReplacePopUpButton(){
        return $('button=Close');
    }

    createNewGoogleDoc() {
        this.newButton.click();
        this.googleDocsOption.click();   
    }

    addTextInTheGoogleEditor(textToBeAdded) {
        this.textEditor.setValue(textToBeAdded)
    }

    replaceWordInText(replacedWord, newWord) {
        this.editButton.click();
        this.replaceWordButton.click();
        this.replaceWordButton.setValue(replacedWord, newWord);
        this.newWordField.setValue();
        this.replaceActionButton.click();
        this.closeFindAndReplacePopUpButton.click();
    }

}

export default new NotePad();