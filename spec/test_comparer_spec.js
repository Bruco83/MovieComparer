var frisby = require('frisby');

frisby.create('Get comparison list')
  .get('http://localhost:3000/api/get_movie_comparison_list')
  .expectStatus(200)
  .expectJSONTypes('0', {
    comparisonRate: Number,
    movie2: String,
    movie1: String
  })
.toss();


frisby.create('Compare movies')
  .post('http://localhost:3000/api/compare_movies',
        {"movie1": '{"Title":"Thor","Year":"2011","Rated":"PG-13","Released":"06 May 2011","Runtime":"115 min","Genre":"Action, Adventure, Fantasy","Director":"Kenneth Branagh","Writer":"Ashley Miller (screenplay), Zack Stentz (screenplay), Don Payne (screenplay), J. Michael Straczynski (story), Mark Protosevich (story), Stan Lee (comic book), Larry Lieber (comic book), Jack Kirby (comic book)","Actors":"Chris Hemsworth, Natalie Portman, Tom Hiddleston, Anthony Hopkins","Plot":"The powerful but arrogant god Thor is cast out of Asgard to live amongst humans in Midgard (Earth), where he soon becomes one of their finest defenders.","Language":"English","Country":"USA","Awards":"5 wins %26 29 nominations.","Poster":"http://ia.media-imdb.com/images/M/MV5BMTYxMjA5NDMzNV5BMl5BanBnXkFtZTcwOTk2Mjk3NA@@._V1_SX300.jpg","Metascore":"57","imdbRating":"7.0","imdbVotes":"504,515","imdbID":"tt0800369","Type":"movie","Response":"True"}',
        "movie2": '{"Title":"Rambo","Year":"1900","Rated":"R","Released":"25 Jan 2008","Runtime":"92 min","Genre":"Action, Thriller, War","Director":"Kenneth Branagh","Writer":"Art Monterastelli, Sylvester Stallone, David Morrell (character)","Actors":"Sylvester Stallone, Natalie Portman,  Julie Benz, Matthew Marsden, Graham McTavish","Plot":"In Thailand, John Rambo joins a group of mercenaries to venture into war-torn Burma, and rescue a group of Christian aid workers who were kidnapped by the ruthless local infantry unit.","Language":"English, Burmese, Thai","Country":"USA, Germany","Awards":"1 win %26 1 nomination.","Poster":"http://ia.media-imdb.com/images/M/MV5BMTI5Mjg1MzM4NF5BMl5BanBnXkFtZTcwNTAyNzUzMw@@._V1_SX300.jpg","Metascore":"46","imdbRating":"7.1","imdbVotes":"174,600","imdbID":"tt0462499","Type":"movie","Response":"True"}'},
        { json: true },
        { headers: { 'Content-Type': 'application/json' }}
    )
  .expectStatus(200)
.toss();