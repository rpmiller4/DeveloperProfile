import React, { Component } from 'react';
import { Scores } from './Scores';
import * as qna from '@tensorflow-models/qna';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ClickableImageGridList from './ClickableImageGridList'
//import IconButton from '@material-ui/core/IconButton';
//import StarBorderIcon from '@material-ui/icons/StarBorder';
//import tileData from './tileData';

export class QnAGallery extends Component {
  static displayName = QnAGallery.name;
  constructor(props) {
    super(props);
    this.state = {
      question : "Where is San Diego?",
      context: "San Diego (/ˌsæn diˈeɪɡoʊ/, Spanish: [san ˈdjeɣo]; Spanish for 'Saint Didacus') is a city in the U.S. state of California on the coast of the Pacific Ocean and immediately adjacent to the United States–Mexico border. With an estimated population of 1,423,851 as of July 1, 2019,[10] San Diego is the eighth most populous city in the United States and second most populous in California (after Los Angeles). The city is the county seat of San Diego County, the fifth most populous county in the United States, with 3,338,330 estimated residents as of 2019. The city is known for its mild year-round climate, natural deep-water harbor, extensive beaches and parks, long association with the United States Navy and Marine Corps, and recent emergence as a healthcare and biotechnology development center. Historically home to the Kumeyaay people, San Diego is frequently referred to as the 'Birthplace of California', as it was the first site visited and settled by Europeans on what is now the West Coast of the United States.[12] Upon landing in San Diego Bay in 1542, Juan Rodríguez Cabrillo claimed the area for Spain, forming the basis for the settlement of Alta California 200 years later.The Presidio and Mission San Diego de Alcalá, founded in 1769, formed the first European settlement in what is now California.In 1821, San Diego became part of the newly declared Mexican Empire, which reformed as the First Mexican Republic two years later.California became part of the United States in 1848 following the Mexican–American War and was admitted to the union as a state in 1850. San Diego's main economic engines are military and defense-related activities, tourism, international trade, research, and manufacturing. The city is the economic center of the San Diego–Tijuana conurbation, the second most populous transborder metropolitan area in the western hemisphere (after Detroit–Windsor), home to an estimated 4,922,723 people as of 2012.[13] The primary border crossing between San Diego and Tijuana, the San Ysidro Port of Entry, is the busiest international land border crossing in the world outside of Asia (fourth-busiest overall). The city's primary airport, San Diego International Airport, is the busiest single- runway airport in the world.[a][14]",
      answer: [],
      galleryItems: [
        {
          id: 0,
          articleTitle: "San Diego",
          passage: "San Diego (/ˌsæn diˈeɪɡoʊ/, Spanish: [san ˈdjeɣo]; Spanish for 'Saint Didacus') is a city in the U.S. state of California on the coast of the Pacific Ocean and immediately adjacent to the United States–Mexico border. With an estimated population of 1,423,851 as of July 1, 2019,[10] San Diego is the eighth most populous city in the United States and second most populous in California (after Los Angeles). The city is the county seat of San Diego County, the fifth most populous county in the United States, with 3,338,330 estimated residents as of 2019. The city is known for its mild year-round climate, natural deep-water harbor, extensive beaches and parks, long association with the United States Navy and Marine Corps, and recent emergence as a healthcare and biotechnology development center. Historically home to the Kumeyaay people, San Diego is frequently referred to as the 'Birthplace of California', as it was the first site visited and settled by Europeans on what is now the West Coast of the United States.[12] Upon landing in San Diego Bay in 1542, Juan Rodríguez Cabrillo claimed the area for Spain, forming the basis for the settlement of Alta California 200 years later.The Presidio and Mission San Diego de Alcalá, founded in 1769, formed the first European settlement in what is now California.In 1821, San Diego became part of the newly declared Mexican Empire, which reformed as the First Mexican Republic two years later.California became part of the United States in 1848 following the Mexican–American War and was admitted to the union as a state in 1850. San Diego's main economic engines are military and defense-related activities, tourism, international trade, research, and manufacturing. The city is the economic center of the San Diego–Tijuana conurbation, the second most populous transborder metropolitan area in the western hemisphere (after Detroit–Windsor), home to an estimated 4,922,723 people as of 2012.[13] The primary border crossing between San Diego and Tijuana, the San Ysidro Port of Entry, is the busiest international land border crossing in the world outside of Asia (fourth-busiest overall). The city's primary airport, San Diego International Airport, is the busiest single- runway airport in the world.[a][14]",
          question: "What's special about San Diego?",
          imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/San_Diego_skyline_18.jpg/1024px-San_Diego_skyline_18.jpg",
          cols: 1
        },
        {
          id: 1,
          articleTitle: "Glass",
          question: "what's the primary component of glass?",
          passage: "Glass is a non-crystalline, often transparent amorphous solid, that has widespread practical, technological, and decorative use in, for example, window panes, tableware, and optics. Glass is most often formed by rapid cooling (quenching) of the molten form; some glasses such as volcanic glass are naturally occurring. The most familiar, and historically the oldest, types of manufactured glass are 'silicate glasses' based on the chemical compound silica (silicon dioxide, or quartz), the primary constituent of sand. Soda-lime glass, containing around 70% silica, accounts for around 90% of manufactured glass. The term glass, in popular usage, is often used to refer only to this type of material, although silica-free glasses often have desirable properties for applications in modern communications technology. Some objects, such as drinking glasses and eyeglasses, are so commonly made of silicate-based glass that they are simply called by the name of the material. Although brittle, silicate glass is extremely durable and many examples of glass fragments exist from early glass- making cultures.Archaeological evidence suggests glass - making dates back to at least 3, 600 BC in Mesopotamia, Egypt, or Syria.The earliest known glass objects were beads, perhaps created accidentally during metalworking or the production of faience.Due to its ease of formability into any shape, glass has been traditionally used for vessels, such as bowls, vases, bottles, jars and drinking glasses.In its most solid forms, it has also been used for paperweights and marbles.Glass can be coloured by adding metal salts or painted and printed with vitreous enamels, leading to its use in stained glass windows and other glass art objects. The refractive, reflective and transmission properties of glass make glass suitable for manufacturing optical lenses, prisms, and optoelectronics materials.Extruded glass fibres have application as optical fibres in communications networks, thermal insulating material when matted as glass wool so as to trap air, or in glass - fibre reinforced plastic(fibreglass).",
          imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Fassade_Wilhelmstrasse_65%2C_Berlin-Mitte%2C_160417%2C_ako.jpg/1024px-Fassade_Wilhelmstrasse_65%2C_Berlin-Mitte%2C_160417%2C_ako.jpg",
          cols: 1
        },
        {
          id: 2,
          articleTitle: "Cheesecake",
          passage: "Cheesecake is a sweet dessert consisting of one or more layers. The main, and thickest, layer consists of a mixture of a soft, fresh cheese (typically cottage cheese, cream cheese or ricotta), eggs, and sugar. If there is a bottom layer, it most often consists of a crust or base made from crushed cookies (or digestive biscuits), graham crackers, pastry, or sometimes sponge cake.[1] Cheesecake may be baked or unbaked (and is usually refrigerated). Cheesecake is usually sweetened with sugar and may be flavored in different ways.Vanilla, spices, lemon, chocolate, pumpkin, or other flavors may be added to the main cheese layer.Additional flavors and visual appeal may be added by topping the finished dessert with fruit, whipped cream, nuts, cookies, fruit sauce, chocolate syrup, or other ingredients.",
          question: "What's the crust made of?",
          imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/My_first_cheesecake_cropped.jpg/800px-My_first_cheesecake_cropped.jpg",
          cols: 1
        },
        {
          id: 3,
          articleTitle: "Life",
          question: "What is the definition of 'life'?",
          passage: "Life is a characteristic that distinguishes physical entities that have biological processes, such as signaling and self-sustaining processes, from those that do not, either because such functions have ceased (they have died), or because they never had such functions and are classified as inanimate. Various forms of life exist, such as plants, animals, fungi, protists, archaea, and bacteria. Biology is the science concerned with the study of life. There is currently no consensus regarding the definition of life.One popular definition is that organisms are open systems that maintain homeostasis, are composed of cells, have a life cycle, undergo metabolism, can grow, adapt to their environment, respond to stimuli, reproduce and evolve.Other definitions sometimes include non- cellular life forms such as viruses and viroids. Abiogenesis is the natural process of life arising from non - living matter, such as simple organic compounds.The prevailing scientific hypothesis is that the transition from non - living to living entities was not a single event, but a gradual process of increasing complexity.Life on Earth first appeared as early as 4.28 billion years ago, soon after ocean formation 4.41 billion years ago, and not long after the formation of the Earth 4.54 billion years ago.[1][2][3][4] The earliest known life forms are microfossils of bacteria.[5][6] Researchers generally think that current life on Earth descends from an RNA world, [7] although RNA - based life may not have been the first life to have existed.[8][9] The classic 1952 Miller–Urey experiment and similar research demonstrated that most amino acids, the chemical constituents of the proteins used in all living organisms, can be synthesized from inorganic compounds under conditions intended to replicate those of the early Earth.Complex organic molecules occur in the Solar System and in interstellar space, and these molecules may have provided starting material for the development of life on Earth.[10][11][12][13] Since its primordial beginnings, life on Earth has changed its environment on a geologic time scale, but it has also adapted to survive in most ecosystems and conditions.Some microorganisms, called extremophiles, thrive in physically or geochemically extreme environments that are detrimental to most other life on Earth.The cell is considered the structural and functional unit of life.[14][15] There are two kinds of cells, prokaryotic and eukaryotic, both of which consist of cytoplasm enclosed within a membrane and contain many biomolecules such as proteins and nucleic acids.Cells reproduce through a process of cell division, in which the parent cell divides into two or more daughter cells. In the past, there have been many attempts to define what is meant by 'life' through obsolete concepts such as odic force, hylomorphism, spontaneous generation and vitalism, that have now been disproved by biological discoveries.Aristotle is considered to be the first person to classify organisms.Later, Carl Linnaeus introduced his system of binomial nomenclature for the classification of species.Eventually new groups and categories of life were discovered, such as cells and microorganisms, forcing dramatic revisions of the structure of relationships between living organisms.Though currently only known on Earth, life need not be restricted to it, and many scientists speculate in the existence of extraterrestrial life.Artificial life is a computer simulation or human- made reconstruction of any aspect of life, which is often used to examine systems related to natural life. Death is the permanent termination of all biological processes which sustain an organism, and as such, is the end of its life.Extinction is the term describing the dying out of a group or taxon, usually a species.Fossils are the preserved remains or traces of organisms.",
          imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Ruwenpflanzen.jpg/260px-Ruwenpflanzen.jpg",
          cols: 1
        }
      ]
      
    }
    this.respond = this.respond.bind(this);
    this.setContext = this.setContext.bind(this);
    this.setQuestion = this.setQuestion.bind(this);
    this.respond = this.respond.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  setContext(event) {
    this.setState({
      question: event.target.value
    });
  }

  setQuestion(event) {
    this.setState({
      context: event.target.value
    });
  }

  handleClick(itemId) {
    alert(itemId);
  }

  handleChange = event => {
    this.setState(
      {
        context: this.state.galleryItems[event].passage,
        question: this.state.galleryItems[event].question
      },
      () => this.respond(this.state.question, this.state.context));
  }

  render() {
    return (
      <div>
        <h4> Select a Wikipedia Article Introduction to Answer Questions with Tensorflow ML and AI</h4>
        <h5 class="text-muted"> Alternatively, copy and paste text into the fields below. Or write your own question!</h5>  
        <ClickableImageGridList galleryItems={this.state.galleryItems} onChange={this.handleChange} />
        <form>
          <div class="form-group">
            <input type="text" class="form-control" value={this.state.question} onChange={() => this.setQuestion} />
            <textarea type="textarea" class="form-control" value={this.state.context} onChange={() => this.setContext()} />
            <input type="button" class="form-control btn btn-primary mb-2" onClick={() => this.submitQuestion()} value="Get Answers"></input>
          </div>
        </form>
        <Scores scores={this.state.answer} />
      </div>
    );
  }


  async submitQuestion() {
    await this.respond(this.state.question, this.state.context)
  }

  async respond(question, passage) {
    console.log(question);
    console.log(passage);
    console.log(qna.version);
    // Load the model.
    await qna.load().then(model => {
      // Find the answers
      model.findAnswers(question, passage).then(answers => {
        console.dir(answers);
        this.setState({ answer: answers }, () => {
          //callback
          console.log(this.state.answer);
        });
      });
    });
  }

}