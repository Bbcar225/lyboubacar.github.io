var linksMenu = document.querySelectorAll('.nav-link');

var home = document.getElementById('home');
var abouts = document.getElementById('abouts');
var formations = document.getElementById('formations');
var competences = document.getElementById('competences');
var experiences = document.getElementById('experiences');
var contacts = document.getElementById('contacts');

var homeLink = document.getElementById('homeLink');
var aboutsLink = document.getElementById('aboutsLink');
var formationsLink = document.getElementById('formationsLink');
var competencesLink = document.getElementById('competencesLink');
var experiencesLink = document.getElementById('experiencesLink');
var contactsLink = document.getElementById('contactsLink');

home.style.display = 'inline-block';
abouts.style.display = 'none';
formations.style.display = 'none';
competences.style.display = 'none';
contacts.style.display = 'none';
experiences.style.display = 'none';

for (var i = 0; i < linksMenu.length; i++)
{
	linkMenu = linksMenu[i];

	linkMenu.addEventListener('click', function(){

		if (this.getAttribute('href') == '#home')
		{
			contentMenu(home, abouts, formations, competences, contacts, experiences);

			// this.innerHTML = '<img src="icons/home.png" class="icons-menu"> ACCEUIL';

			styleLinkMenu(homeLink,aboutsLink, formationsLink, competencesLink, contactsLink, experiencesLink);
		}
		else if (this.getAttribute('href') == '#abouts')
		{
			contentMenu(abouts, home, formations, competences, contacts, experiences);

			// this.innerHTML = '<img src="icons/about-me.png" class="icons-menu"> À PROPOS';

			styleLinkMenu(aboutsLink, homeLink, formationsLink, competencesLink, contactsLink, experiencesLink);
		}
		else if (this.getAttribute('href') == '#formations')
		{
			contentMenu(formations, abouts, home, competences, contacts, experiences);

			// this.innerHTML = '<img src="icons/scolaire.png" class="icons-menu"> FORMATIONS';

			styleLinkMenu(formationsLink, homeLink, aboutsLink, competencesLink, contactsLink, experiencesLink);
		}
		else if (this.getAttribute('href') == '#competences')
		{
			contentMenu(competences, abouts, formations, home, contacts, experiences);

			// this.innerHTML = '<img src="icons/competence.png" class="icons-menu"> COMPÉTENCES';

			styleLinkMenu(competencesLink, homeLink, formationsLink, aboutsLink, contactsLink, experiencesLink);
		}
		else if (this.getAttribute('href') == '#contacts')
		{
			contentMenu(contacts, abouts, formations, competences, home, experiences);

			// this.innerHTML = '<img src="icons/contacts.png" class="icons-menu"> CONTACTS';

			styleLinkMenu(contactsLink, homeLink, formationsLink, competencesLink, aboutsLink, experiencesLink);
		}
		else if (this.getAttribute('href') == '#experiences')
		{
			contentMenu(experiences, contacts, abouts, formations, competences, home);

			// this.innerHTML = '<img src="icons/contacts.png" class="icons-menu"> CONTACTS';

			styleLinkMenu(experiencesLink , contactsLink, homeLink, formationsLink, competencesLink, aboutsLink);
		}
		else
		{
			home.style.display = 'inline-block';

			abouts.style.display = 'none';

			formations.style.display = 'none';

			competences.style.display = 'none';

			experiences.style.display = 'none';

			contacts.style.display = 'none';
		}
	});
}

function styleLinkMenu(element1, element2, element3, element4, element5, element6)
{
	element1.style.border = '1px solid black';
	element1.style.borderRadius = '10px';
	element1.style.boxShadow = '5px 10px 8px #888888';
	element1.style.backgroundColor = 'rgba(181, 241, 239, 1)';

	element2.style.border = '';
	element2.style.borderRadius = '';
	element2.style.boxShadow = '';
	element2.style.backgroundColor = '';

	element3.style.border = '';
	element3.style.borderRadius = '';
	element3.style.boxShadow = '';
	element3.style.backgroundColor = '';

	element4.style.border = '';
	element4.style.borderRadius = '';
	element4.style.boxShadow = '';
	element4.style.backgroundColor = '';

	element5.style.border = '';
	element5.style.borderRadius = '';
	element5.style.boxShadow = '';
	element5.style.backgroundColor = '';

	element6.style.border = '';
	element6.style.borderRadius = '';
	element6.style.boxShadow = '';
	element6.style.backgroundColor = '';	
}

function contentMenu(element1, element2, element3, element4, element5, element6)
{
	element1.style.display = 'block';

	element2.style.display = 'none';

	element3.style.display = 'none';

	element4.style.display = 'none';

	element5.style.display = 'none';

	element6.style.display = 'none';	
}