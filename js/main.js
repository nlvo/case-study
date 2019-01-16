var h1 = document.querySelector('h1'),
    btn = document.querySelector('.btn'),
    next = document.querySelector('.next'),
    sentencesContainer = document.querySelector('.story__paragraph'),
    paragraphContainer = document.querySelector('.story__gradient'),
    story = [{
            title: 'De bus stopt.',
            description: 'Mensen stappen uit. Heel voorzichtig kijk ik in de kinderwagen. Mijn zoon slaapt eindelijk. Ik had het kunnen weten, want halverwege de busreis merkte ik dat de mensen zich niet meer aan ons stoorden. Het gejank zou toen wel gestopt zijn.'
        },
        {
            title: 'Ik stap uit en wandel over het stationsplein richting de Openbare Bibliotheek waar ik Stijloefeningen van Raymond Queneau hoop te kunnen lenen.',
            description: 'Het vervelende van doof zijn, is dat je niet even kunt bellen of ze iets hebben. Je moet altijd overal naar toe. Afgelopen week heb ik de hele stad doorgereisd, op zoek naar antiquairs. Maar nergens is het boek te vinden. De Opbenbare Bibliotheek is mijn laatste hoop.'
        },
        {
            title: 'Je moet altijd overal naar toe.',
            description: 'Afgelopen week heb ik de hele stad doorgereisd, op zoek naar antiquairs. Maar nergens is het boek te vinden. De Opbenbare Bibliotheek is mijn laatste hoop.'
        },
        {
            title: 'Het miezert en er waait een snijdend windje.',
            description: 'De mensen lopen in zichzelf gekeerd over de natte stenen van het plein. Ik steek de weg over en moet over een modderige plank verder. Waar zijn ze hier nu weer mee bezig? Die vermaledijde Noord-Zuidlijn zeker. Of zijn ze kantoren aan het bouwen? Alles ligt hier open. Grote bouwputten, beneden zijn mensen hard aan het werk. Door het gedreun van de heipalen trilt de houten reling van de provisorische loopbrug die mij naar de OBA brengt.'
        },
        {
            title: 'Vlak voordat ik de bibliotheek wil betreden,',
            description: 'staat er ineens een vrouw voor me. Ik schrik me rot. Ze heeft inktzwart, weelderig krullend haar. Haar vuurrode lippen bewegen in een taal die ik niet meteen kan thuisbrengen. Het lijkt Engels, maar helemaal zeker ben ik niet. Ik meen de woorden post office op haar lippen te lezen. Ik wijs met draaiende wijsvingers naar mijn oren en zeg zo duidelijk mogelijk: \'I’m deaf.\''
        },
        {
            title: 'Ze denkt even na en haalt dan een briefje uit haar binnenzak.',
            description: 'Ik zie twee adressen staan. Oosterdokskade 5 en Raadhuisstraat 13. Dat zou inderdaad wel eens over het postkantoor kunnen gaan. Want hier, op het Oosterdokseiland stond inderdaad tot voor kort het hoofdpostkantoor.'
        },
        {
            title: 'Terwijl ik hier over nadenk, zie ik dat de vrouw wordt afgeleid door iets wat zich achter haar afspeelt.',
            description: 'Ik probeer haar blik te volgen en zie een grijze Renault 21 met een Frans nummerbord achteruit rijdend van ons weg rijden. Ze kijkt weer naar me terug en lacht verontschuldigend.'
        },
        {
            title: 'Ik wil met m’n vinger naar de Raadhuisstraat wijzen,',
            description: 'maar ze grist het briefje uit m’n handen en rent naar de auto. Haar haren dansen op een net iets trager ritme dan dat de rest van haar rennende lichaam aangeeft.'
        },
        {
            title: 'Binnen sta ik bij de Q te zoeken naar de boeken van Queneau.',
            description: 'Er staan aardig wat boeken van \'m, maar net Stijloefeningen niet. Ik kijk nog bij de belendende letters, maar kan het boek niet vinden. Ik loop naar de computers en tik Stijloefeningen in. Volgens de online catalogus van de OBA is het boek wel degelijk aanwezig. Op de daartoe bestemde plek. Ik pak een briefje en schrijf op: \'Ik ben op zoek naar Stijloefeningen van Raymond Queneau. Volgens de computer is het boek aanwezig, maar ik kan het niet vinden. Kunt u mij helpen?\''
        },
        {
            title: 'Ik ga met het briefje naar de eerste de beste medewerker.',
            description: 'Een jongeman met een licht getinte huidskleur. Hij draagt een hoornen bril en een Noorse trui. Donkerblauw met sneeuwmotief. Hij zit geconcentreerd naar zijn computerscherm te kijken.'
        },
        {
            title: '\'Hallo\',',
            description: 'zeg ik tegen de medewerker die zich het apelazarus schrikt en prompt van zijn stoel valt. Als hij is opgekrabbeld, maak ik mijn excuses en wijs ik naar mijn oren. ‘Doof’, zeg ik en overhandig het briefje.'
        },
        {
            title: 'Hij leest het briefje.',
            description: 'Tikt wat in op zijn computer. Mompelt iets wat ik niet kan ontcijferen. Loopt voor me uit. En blijft god betere staan bij de Q. Met zijn vinger gaat hij langs de ruggen. Hij vindt het boek niet. Hij kijkt nog bij de letters ernaast. Hij loopt de karretjes met net terug gebrachte boeken na, maar niks.'
        },
        {
            title: 'Hij wil zich verontschuldigen,',
            description: 'maar lijkt dan ineens een idee te krijgen. Hij schrijft wat op een briefje. \'Ik stuur een mail naar het magazijn. Zij hebben vast nog een exemplaar. Duurt vijftien minuten.\' Ik steek m\'n duim op en kijk verheugd.'
        },
        {
            title: 'Hij schrijft een mailtje.',
            description: 'Als hij het verstuurt heeft, wijst hij op zijn horloge en articuleert hij heel duidelijk \'VIJF TIEN MI NU TEN\', daarna gebruikt hij nog beide handen om het cijfer vijftien aan te geven. Vervolgens stort hij zich weer op zijn computer.'
        },
        {
            title: 'Ik slenter met de kinderwagen even door de zaal heen en als ik vijftien minuten later terugkom,',
            description: 'zie ik al aan de spijtig samen geperste lippen dat het boek niet aanwezig is.'
        },
        {
            title: '\'Helaas\',',
            description: 'zie ik \'m zeggen. Hij draait z\'n scherm en laat me het mailtje zien. Er staat dat Stijloefeningen gewoon op de daartoe bestemde plek moet liggen. Met een glimlach op mijn gezicht bedank ik hem voor zijn moeite.'
        },
        {
            title: 'Ik verlaat het pand.',
            description: 'In een babywinkel op het Bos en Lommerplein koop ik babyschoentjes voor m\'n zoon.'
        },
    ],
    currentParagraph = 0;

function showSentences() {

    for (var i = 0; i < story.length; i++) {
        console.log(story[i].title);
        // if(i <= 5) {
        // sentencesContainer.innerHTML +=
        //     '<div class="paragraph__sentence sentence--active">' +
        //     '<h2>' + story[i].title + '</h2>' +
        //     '<p>' + story[i].description + '</p>' +
        //     '</div>';
        // }
    }
    // var lastChild = sentencesContainer.lastChild;
    // paragraphContainer.appendChild(lastChild);
    // var secChild = sentencesContainer.lastChild.previousElementSibling;
    // var lastChild = sentencesContainer.lastChild;
    // subtitle.appendChild(lastChild);
}

showSentences();

function showParagraph(num) {
    var featuredSentence = sentencesContainer.lastChild, // get last child/parapgraph from sentence container
        lastChild = sentencesContainer.lastChild;
    var paragraphs = document.querySelectorAll('.paragraph__sentence');
    paragraphContainer.classList.add('hidden');

    // for (var i = currentParagraph; i < num + 5; i++) {
    // 	paragraphs[i].classList.add('sentence--active');
    // }
}

function prevSentence() {

    var paragraphs = document.querySelectorAll('.paragraph__sentence'),
        paragraphActive = document.querySelector('.sentence--active'),
        current = paragraphs[0],
        lastChild = paragraphs[3];

    if (paragraphActive.classList.contains('show')) {
        lastChild.classList.remove('sentence--active', 'show');
        sentencesContainer.insertBefore(lastChild, current); // new, reference element
    } else {
        paragraphs[3].classList.add('sentence--active', 'show');
        // showParagraph(currentParagraph);
    }
}

function nextSentence() {

    var paragraphs = document.querySelectorAll('.paragraph__sentence'),
        paragraphActive = document.querySelector('.sentence--active'),
        current = paragraphs[0];

    if (paragraphActive.classList.contains('show')) {
        // if () {

        // } else {
            paragraphActive.classList.remove('sentence--active', 'show');
            sentencesContainer.appendChild(current);
        // }
    } else {
        paragraphs[0].classList.add('sentence--active', 'show');
        showParagraph(currentParagraph);
    }
}

next.addEventListener('click', prevSentence);
btn.addEventListener('click', showParagraph);


var isThrottled = false,
    throttleDuration = 2000; // ms

function thingToThrottle() {
    if (isThrottled) { return; }
    isThrottled = true;
    setTimeout(function() {
        isThrottled = false;
    }, throttleDuration);
    nextSentence();
}

// https://gist.github.com/derek-watson/3349917

window.addEventListener('wheel', function(e) {
    if (e.deltaY < 0) {
        console.log('scrolling up');
    }
    if (e.deltaY > 0) {
        console.log('scrolling down');
        // document.getElementById('status').innerHTML = 'scrolling down';
        thingToThrottle();
    }
});

// https://stackoverflow.com/questions/24217087/how-to-determine-scroll-direction-without-actually-scrolling