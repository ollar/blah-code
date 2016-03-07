var expect = require('chai').expect;
var blahCode = require('./');

describe('blah-code', function () {
	it('should encode normal text to blah-code', function () {
		expect(blahCode.encode('Hi there! What’s up?')).to.equal('blaaa blih. blah bleh blu. blaah blih. blah blah ble. blah bleh bla. blah bleh blah. blah blah bla. blah bleh blah. blaah blaah. blaah blih. blahh blaaa. blah bleh bla. blee blaaa. blah blah ble. blahh blih blah blaaa. blah blah blu. blaah blih. blah blah blaaa. blah blah blih. ble blaah');
	});

	it('should decode blah-code to normal text', function () {
		expect(blahCode.decode('blah bleh bla. blah bleh blu. blaah blih. blah blah ble. blah bleh bla. blah bleh blah. blah blah bla. blah bleh blah. blaah blaah. blaah blih. blah blah blee. blah bleh bla. blee blaaa. blah blah ble. blah blah blu. blaah blih. blah blah blaaa. blah blah blih. ble blaah')).to.equal('hi there! whats up?');
	});

	it('should encode an email adress to blah-code', function () {
		expect(blahCode.encode('mail@michael-kuehnel.de')).to.equal('blah bleh blee. blee blaaa. blah bleh blu. blah bleh blahh. ble bla. blah bleh blee. blah bleh blu. blee blee. blah bleh bla. blee blaaa. blah bleh blah. blah bleh blahh. bla blu. blah bleh blaaa. blah blah blaaa. blah bleh blah. blah bleh bla. blah blah bleh. blah bleh blah. blah bleh blahh. bla ble. blah bleh bleh. blah bleh blah');
	});

	it('should decode an email adress from blah-code', function () {
		expect(blahCode.decode('blah bleh blee. blee blaaa. blah bleh blu. blah bleh blahh. ble bla. blah bleh blee. blah bleh blu. blee blee. blah bleh bla. blee blaaa. blah bleh blah. blah bleh blahh. bla blu. blah bleh blaaa. blah blah blaaa. blah bleh blah. blah bleh bla. blah blah bleh. blah bleh blah. blah bleh blahh. bla ble. blah bleh bleh. blah bleh blah')).to.equal('mail@michael-kuehnel.de');
	});

	it('should encode a special string into blah-code', function () {
		expect(blahCode.encode('👌👀👌👀👌👀👌👀👌👀 good shit go౦ԁ sHit👌 thats ✔ some good👌👌shit right👌👌there👌👌👌 right✔there ✔✔if i do ƽaү so my self 💯 i say so 💯 thats what im talking about right there right there (chorus: ʳᶦᵍʰᵗ ᵗʰᵉʳᵉ) mMMMMᎷМ💯 👌👌 👌НO0ОଠOOOOOОଠଠOoooᵒᵒᵒᵒᵒᵒᵒᵒᵒ👌 👌👌 👌 💯 👌 👀 👀 👀 👌👌Good shit')).to.equal('blu blu blaah blu blaaa. blu ble blaah blee ble. blu blu blaah blu blaaa. blu ble blaah blahh bla. blu blu blaah blu blaaa. blu ble blaah blee ble. blu blu blaah blu blaaa. blu ble blaah blahh bla. blu blu blaah blu blaaa. blu ble blaah blee ble. blu blu blaah blu blaaa. blu ble blaah blahh bla. blu blu blaah blu blaaa. blu ble blaah blee ble. blu blu blaah blu blaaa. blu ble blaah blahh bla. blu blu blaah blu blaaa. blu ble blaah blee ble. blu blu blaah blu blaaa. blu ble blaah blahh bla. blaah blih. blah bleh blaah. blah blah blah. blah blah blah. blah bleh bleh. blaah blih. blah blah blu. blah bleh bla. blah bleh blu. blah blah ble. blaah blih. blah bleh blaah. blah blah blah. blaah blah blaaa bla. blah blih blahh blah. blaah blih. blah blah blu. blaaa blih. blah bleh blu. blah blah ble. blu blu blaah blu blaaa. blu ble blaah blee ble. blaah blih. blah blah ble. blah bleh bla. blee blaaa. blah blah ble. blah blah blu. blaah blih. blah bleh bleh bleh bla. blaah blih. blah blah blu. blah blah blah. blah bleh blee. blah bleh blah. blaah blih. blah bleh blaah. blah blah blah. blah blah blah. blah bleh bleh. blu blu blaah blu blaaa. blu ble blaah blee ble. blu blu blaah blu blaaa. blu ble blaah blee ble. blah blah blu. blah bleh bla. blah bleh blu. blah blah ble. blaah blih. blah blah bla. blah bleh blu. blah bleh blaah. blah bleh bla. blah blah ble. blu blu blaah blu blaaa. blu ble blaah blee ble. blu blu blaah blu blaaa. blu ble blaah blee ble. blah blah ble. blah bleh bla. blah bleh blah. blah blah bla. blah bleh blah. blu blu blaah blu blaaa. blu ble blaah blee ble. blu blu blaah blu blaaa. blu ble blaah blee ble. blu blu blaah blu blaaa. blu ble blaah blee ble. blaah blih. blah blah bla. blah bleh blu. blah bleh blaah. blah bleh bla. blah blah ble. blah bleh bleh bleh bla. blah blah ble. blah bleh bla. blah bleh blah. blah blah bla. blah bleh blah. blaah blih. blah bleh bleh bleh bla. blah bleh bleh bleh bla. blah bleh blu. blah bleh blih. blaah blih. blah bleh blu. blaah blih. blah bleh bleh. blah blah blah. blaah blih. bla bla blu. blee blaaa. blah blah blee blee. blaah blih. blah blah blu. blah blah blah. blaah blih. blah bleh blee. blah blih blah. blaah blih. blah blah blu. blah bleh blah. blah bleh blahh. blah bleh blih. blaah blih. blu blu blaah blu blaaa. blu ble bla blee blu. blaah blih. blah bleh blu. blaah blih. blah blah blu. blee blaaa. blah blih blah. blaah blih. blah blah blu. blah blah blah. blaah blih. blu blu blaah blu blaaa. blu ble bla blee blu. blaah blih. blah blah ble. blah bleh bla. blee blaaa. blah blah ble. blah blah blu. blaah blih. blah blah blee. blah bleh bla. blee blaaa. blah blah ble. blaah blih. blah bleh blu. blah bleh blee. blaah blih. blah blah ble. blee blaaa. blah bleh blahh. blah bleh blaaa. blah bleh blu. blah blah bleh. blah bleh blaah. blaah blih. blee blaaa. blee blahh. blah blah blah. blah blah blaaa. blah blah ble. blaah blih. blah blah bla. blah bleh blu. blah bleh blaah. blah bleh bla. blah blah ble. blaah blih. blah blah ble. blah bleh bla. blah bleh blah. blah blah bla. blah bleh blah. blaah blih. blah blah bla. blah bleh blu. blah bleh blaah. blah bleh bla. blah blah ble. blaah blih. blah blah ble. blah bleh bla. blah bleh blah. blah blah bla. blah bleh blah. blaah blih. bla bleh. blee blee. blah bleh bla. blah blah blah. blah blah bla. blah blah blaaa. blah blah blu. blu blahh. blaah blih. ble blee blah. blaaa blu blee bleh. blaaa blu bleh blah. ble blahh blahh. blaaa blu blah blah. blaah blih. blaaa blu blah blah. ble blahh blahh. blaaa bla blee blaaa. ble blee blah. blaaa bla blee blaaa. bla blah. blaah blih. blah bleh blee. blaaa blaaa. blaaa blaaa. blaaa blaaa. blaaa blaaa. blu bleh bla blaaa. blah bleh blu blih. blu blu blaah blu blaaa. blu ble bla blee blu. blaah blih. blu blu blaah blu blaaa. blu ble blaah blee ble. blu blu blaah blu blaaa. blu ble blaah blee ble. blaah blih. blu blu blaah blu blaaa. blu ble blaah blee ble. blah bleh blu blaah. blaaa blee. bla blahh. blah bleh blu bla. blih blahh bla blahh. blaaa blee. blaaa blee. blaaa blee. blaaa blee. blaaa blee. blah bleh blu bla. blih blahh bla blahh. blih blahh bla blahh. blaaa blee. blah blah blah. blah blah blah. blah blah blah. blaaa blu bleh ble. blaaa blu bleh ble. blaaa blu bleh ble. blaaa blu bleh ble. blaaa blu bleh ble. blaaa blu bleh ble. blaaa blu bleh ble. blaaa blu bleh ble. blaaa blu bleh ble. blu blu blaah blu blaaa. blu ble blaah blee ble. blaah blih. blu blu blaah blu blaaa. blu ble blaah blee ble. blu blu blaah blu blaaa. blu ble blaah blee ble. blaah blih. blu blu blaah blu blaaa. blu ble blaah blee ble. blaah blih. blu blu blaah blu blaaa. blu ble bla blee blu. blaah blih. blu blu blaah blu blaaa. blu ble blaah blee ble. blaah blih. blu blu blaah blu blaaa. blu ble blaah blahh bla. blaah blih. blu blu blaah blu blaaa. blu ble blaah blahh bla. blaah blih. blu blu blaah blu blaaa. blu ble blaah blahh bla. blaah blih. blu blu blaah blu blaaa. blu ble blaah blee ble. blu blu blaah blu blaaa. blu ble blaah blee ble. blaaa blah. blah blah blah. blah blah blah. blah bleh bleh. blaah blih. blah blah blu. blah bleh bla. blah bleh blu. blah blah ble');
	});

	it('should decode a special string from blah-code', function () {
		expect(blahCode.decode('blu blu blaah blu blaaa. blu ble blaah blee ble. blu blu blaah blu blaaa. blu ble blaah blahh bla. blu blu blaah blu blaaa. blu ble blaah blee ble. blu blu blaah blu blaaa. blu ble blaah blahh bla. blu blu blaah blu blaaa. blu ble blaah blee ble. blu blu blaah blu blaaa. blu ble blaah blahh bla. blu blu blaah blu blaaa. blu ble blaah blee ble. blu blu blaah blu blaaa. blu ble blaah blahh bla. blu blu blaah blu blaaa. blu ble blaah blee ble. blu blu blaah blu blaaa. blu ble blaah blahh bla. blaah blih. blah bleh blaah. blah blah blah. blah blah blah. blah bleh bleh. blaah blih. blah blah blu. blah bleh bla. blah bleh blu. blah blah ble. blaah blih. blah bleh blaah. blah blah blah. blaah blah blaaa bla. blah blih blahh blah. blaah blih. blah blah blu. blaaa blih. blah bleh blu. blah blah ble. blu blu blaah blu blaaa. blu ble blaah blee ble. blaah blih. blah blah ble. blah bleh bla. blee blaaa. blah blah ble. blah blah blu. blaah blih. blah bleh bleh bleh bla. blaah blih. blah blah blu. blah blah blah. blah bleh blee. blah bleh blah. blaah blih. blah bleh blaah. blah blah blah. blah blah blah. blah bleh bleh. blu blu blaah blu blaaa. blu ble blaah blee ble. blu blu blaah blu blaaa. blu ble blaah blee ble. blah blah blu. blah bleh bla. blah bleh blu. blah blah ble. blaah blih. blah blah bla. blah bleh blu. blah bleh blaah. blah bleh bla. blah blah ble. blu blu blaah blu blaaa. blu ble blaah blee ble. blu blu blaah blu blaaa. blu ble blaah blee ble. blah blah ble. blah bleh bla. blah bleh blah. blah blah bla. blah bleh blah. blu blu blaah blu blaaa. blu ble blaah blee ble. blu blu blaah blu blaaa. blu ble blaah blee ble. blu blu blaah blu blaaa. blu ble blaah blee ble. blaah blih. blah blah bla. blah bleh blu. blah bleh blaah. blah bleh bla. blah blah ble. blah bleh bleh bleh bla. blah blah ble. blah bleh bla. blah bleh blah. blah blah bla. blah bleh blah. blaah blih. blah bleh bleh bleh bla. blah bleh bleh bleh bla. blah bleh blu. blah bleh blih. blaah blih. blah bleh blu. blaah blih. blah bleh bleh. blah blah blah. blaah blih. bla bla blu. blee blaaa. blah blah blee blee. blaah blih. blah blah blu. blah blah blah. blaah blih. blah bleh blee. blah blih blah. blaah blih. blah blah blu. blah bleh blah. blah bleh blahh. blah bleh blih. blaah blih. blu blu blaah blu blaaa. blu ble bla blee blu. blaah blih. blah bleh blu. blaah blih. blah blah blu. blee blaaa. blah blih blah. blaah blih. blah blah blu. blah blah blah. blaah blih. blu blu blaah blu blaaa. blu ble bla blee blu. blaah blih. blah blah ble. blah bleh bla. blee blaaa. blah blah ble. blah blah blu. blaah blih. blah blah blee. blah bleh bla. blee blaaa. blah blah ble. blaah blih. blah bleh blu. blah bleh blee. blaah blih. blah blah ble. blee blaaa. blah bleh blahh. blah bleh blaaa. blah bleh blu. blah blah bleh. blah bleh blaah. blaah blih. blee blaaa. blee blahh. blah blah blah. blah blah blaaa. blah blah ble. blaah blih. blah blah bla. blah bleh blu. blah bleh blaah. blah bleh bla. blah blah ble. blaah blih. blah blah ble. blah bleh bla. blah bleh blah. blah blah bla. blah bleh blah. blaah blih. blah blah bla. blah bleh blu. blah bleh blaah. blah bleh bla. blah blah ble. blaah blih. blah blah ble. blah bleh bla. blah bleh blah. blah blah bla. blah bleh blah. blaah blih. bla bleh. blee blee. blah bleh bla. blah blah blah. blah blah bla. blah blah blaaa. blah blah blu. blu blahh. blaah blih. ble blee blah. blaaa blu blee bleh. blaaa blu bleh blah. ble blahh blahh. blaaa blu blah blah. blaah blih. blaaa blu blah blah. ble blahh blahh. blaaa bla blee blaaa. ble blee blah. blaaa bla blee blaaa. bla blah. blaah blih. blah bleh blee. blaaa blaaa. blaaa blaaa. blaaa blaaa. blaaa blaaa. blu bleh bla blaaa. blah bleh blu blih. blu blu blaah blu blaaa. blu ble bla blee blu. blaah blih. blu blu blaah blu blaaa. blu ble blaah blee ble. blu blu blaah blu blaaa. blu ble blaah blee ble. blaah blih. blu blu blaah blu blaaa. blu ble blaah blee ble. blah bleh blu blaah. blaaa blee. bla blahh. blah bleh blu bla. blih blahh bla blahh. blaaa blee. blaaa blee. blaaa blee. blaaa blee. blaaa blee. blah bleh blu bla. blih blahh bla blahh. blih blahh bla blahh. blaaa blee. blah blah blah. blah blah blah. blah blah blah. blaaa blu bleh ble. blaaa blu bleh ble. blaaa blu bleh ble. blaaa blu bleh ble. blaaa blu bleh ble. blaaa blu bleh ble. blaaa blu bleh ble. blaaa blu bleh ble. blaaa blu bleh ble. blu blu blaah blu blaaa. blu ble blaah blee ble. blaah blih. blu blu blaah blu blaaa. blu ble blaah blee ble. blu blu blaah blu blaaa. blu ble blaah blee ble. blaah blih. blu blu blaah blu blaaa. blu ble blaah blee ble. blaah blih. blu blu blaah blu blaaa. blu ble bla blee blu. blaah blih. blu blu blaah blu blaaa. blu ble blaah blee ble. blaah blih. blu blu blaah blu blaaa. blu ble blaah blahh bla. blaah blih. blu blu blaah blu blaaa. blu ble blaah blahh bla. blaah blih. blu blu blaah blu blaaa. blu ble blaah blahh bla. blaah blih. blu blu blaah blu blaaa. blu ble blaah blee ble. blu blu blaah blu blaaa. blu ble blaah blee ble. blaaa blah. blah blah blah. blah blah blah. blah bleh bleh. blaah blih. blah blah blu. blah bleh bla. blah bleh blu. blah blah ble')).to.equal('👌👀👌👀👌👀👌👀👌👀 good shit go౦ԁ sHit👌 thats ✔ some good👌👌shit right👌👌there👌👌👌 right✔there ✔✔if i do ƽaү so my self 💯 i say so 💯 thats what im talking about right there right there (chorus: ʳᶦᵍʰᵗ ᵗʰᵉʳᵉ) mMMMMᎷМ💯 👌👌 👌НO0ОଠOOOOOОଠଠOoooᵒᵒᵒᵒᵒᵒᵒᵒᵒ👌 👌👌 👌 💯 👌 👀 👀 👀 👌👌Good shit');
	});
});

describe('ape-code', function () {
	it('should encode text to ape code', function () {
		expect(blahCode.encodeApe('Hi there!')).to.equal('Ook! Ook!, Ook? Ook. Ook., Ook., Ook! Ook. Ook!, Ook! Ook!, Ook? Ook!, Ook! Ook. Ook., Ook? Ook!, Ook? Ook. Ook? Ook.');
	});

	it('should decode ape code to text', function () {
		expect(blahCode.decodeApe('Ook! Ook!, Ook? Ook. Ook., Ook., Ook! Ook. Ook!, Ook! Ook!, Ook? Ook!, Ook! Ook. Ook., Ook? Ook!, Ook? Ook. Ook? Ook.')).to.equal('hi there!');
	});

	it('should encode email to ape code', function () {
		expect(blahCode.encodeApe('spamalot@hardcoded.de')).to.equal('Ook! Ook. Ook?, Ook? Ook! Ook?, Ook?, Ook? Ook? Ook?, Ook?, Ook? Ook? Ook., Ook? Ook! Ook., Ook! Ook. Ook!, Ook? Ook. Ook! Ook?, Ook! Ook!, Ook?, Ook! Ook. Ook., Ook? Ook?, Ook? Ook., Ook? Ook! Ook., Ook? Ook?, Ook? Ook!, Ook? Ook?, Ook? Ook. Ook? Ook!, Ook? Ook?, Ook? Ook!');
	});

	it('should decode ape code to email', function () {
		expect(blahCode.decodeApe('Ook! Ook. Ook?, Ook? Ook! Ook?, Ook?, Ook? Ook? Ook?, Ook?, Ook? Ook? Ook., Ook? Ook! Ook., Ook! Ook. Ook!, Ook? Ook. Ook! Ook?, Ook! Ook!, Ook?, Ook! Ook. Ook., Ook? Ook?, Ook? Ook., Ook? Ook! Ook., Ook? Ook?, Ook? Ook!, Ook? Ook?, Ook? Ook. Ook? Ook!, Ook? Ook?, Ook? Ook!')).to.equal('spamalot@hardcoded.de');
	});
});
