module.exports = async e => {
    const qApi = e.quickAddApi;

    var inputResult = await qApi.inputPrompt("New Heading", "Enter the title of the new heading");

    console.log(inputResult);


    if (inputResult && typeof inputResult === "string" && inputResult.trim().length > 0) {
        await qApi.executeChoice("Add Outline", { "title": inputResult });
        await qApi.executeChoice("Add Heading", { "title": inputResult });
    }


}

