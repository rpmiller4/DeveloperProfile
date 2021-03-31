# DeveloperProfile

## Is this project live?

Yes. Visit https://rpmiller4.azurewebsites.net/

## What is it?

This project was originally going to be a professional portfolio. For now instead, I'm jamming as much machine learning into it as possible, beginning with the tensorflow QnA model.

## Why does the questions and answers submission form take so long on mobile/laptop/old computer?

That's because the tensorflow model has been converted to javascript and is running on your device. In fact, if you are on regular computer, tensorflow will try to use your graphics card to process the information faster. For faster results try reducing the passage length. If you have a graphics processing card, you might try to analyze much longer passages than the samples provided.

## Google already answers questions if you ask. What's the point of this?

Imagine you have a lot of internal documents that aren't visible to Google. In that case, this model can answer questions about those documents.

For a closer look at the inner-workings inside a colab notebook visit https://www.tensorflow.org/tutorials/text/classify_text_with_bert.
