<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <v-card>
        <v-card-title class="headline font-weight-medium"
          >Welcome to the p5.js website translator!</v-card-title
        >
        <v-card-text>
          <ul>
            <li>
              <p class="font-weight-medium">
                To start, select the section you want to translate from the
                navigation drawer on the left.
              </p>
              <p>
                You can choose between the Reference section, containing the
                documentation of the p5.js library, and the Website section,
                that includes the text from the rest of the website. The
                Examples section is not yet available.
              </p>
            </li>
            <li>
              <p class="font-weight-medium">
                Choose the language from the menu at the top of the page.
              </p>
            </li>
            <li>
              <p class="font-weight-medium">Start editing the text cards.</p>
              <p>
                A list of text cards will appear, one for each string of text
                from the translation files of the website. Each card will
                contain the key of the string, its original version (in
                English), and finally its translated version in an editable text
                field. If the translated text is equal to its English version
                the app will consider it untranslated and highlight the related
                card in green (as shown below).
              </p>
              <img
                src="../media/textcard_example.png"
                alt="Example of text card."
                height="100"
              />
            </li>
            <li>
              <p class="font-weight-medium">
                Download the edited file once you're done translating.
              </p>
              <p>
                Press the green "Download" button at the top of the page to
                download the file.
              </p>
            </li>
            <li>
              <p class="font-weight-medium">
                Submit your changes to the p5.js website
              </p>
              <ul>
                <li>
                  <p>
                    Make sure to have forked and cloned the p5.js-website
                    repository.
                  </p>
                </li>
                <li>
                  <p>
                    Look for the translation file in the folder of the cloned
                    repository and replace its content with the one from the
                    file you have just downloaded.
                  </p>
                </li>
                <li>
                  <p>Commit the changes to your fork.</p>
                </li>
                <li>
                  <p>Create a Pull Request.</p>
                </li>
              </ul>
            </li>
          </ul>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>
