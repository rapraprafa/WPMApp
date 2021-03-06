import { Component, OnInit, ɵCompiler_compileModuleSync__POST_R3__ } from '@angular/core';
import { LeaderboardService } from '../leaderboard.service';
import { LeaderBoard } from '../leaderboard';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-wpmtest',
  templateUrl: './wpmtest.component.html',
  styleUrls: ['./wpmtest.component.css']
})
export class WpmtestComponent implements OnInit {
  words = ["ability", "able", "about", "above", "accept", "according", "account", "across", "act",
    "action", "activity", "actually", "add", "address", "administration", "admit", "adult", "affect", "after",
    "again", "against", "age", "agency", "agent", "ago", "agree", "agreement", "ahead", "air", "all", "allow",
    "almost", "alone", "along", "already", "also", "although", "always", "American", "among", "amount",
    "analysis", "and", "animal", "another", "answer", "any", "anyone", "anything", "appear", "apply",
    "approach", "area", "argue", "arm", "around", "arrive", "art", "article", "artist", "as", "ask",
    "assume", "at", "attack", "attention", "attorney", "audience", "author", "authority", "available",
    "avoid", "away", "baby", "back", "bad", "bag", "ball", "bank", "bar", "base", "be", "beat",
    "beautiful", "because", "become", "bed", "before", "begin", "behavior", "behind", "believe",
    "benefit", "best", "better", "between", "beyond", "big", "bill", "billion", "bit", "black", "blood",
    "blue", "board", "body", "book", "born", "both", "box", "boy", "break", "bring", "brother", "budget",
    "build", "building", "business", "but", "buy", "by", "call", "camera", "campaign", "can", "cancer",
    "candidate", "capital", "car", "card", "care", "career", "carry", "case", "catch", "cause", "cell",
    "center", "central", "century", "certain", "certainly", "chair", "challenge", "chance", "change",
    "character", "charge", "check", "child", "choice", "choose", "church", "citizen", "city", "civil",
    "claim", "class", "clear", "clearly", "close", "coach", "cold", "collection", "college", "color",
    "come", "commercial", "common", "community", "company", "compare", "computer", "concern", "condition",
    "conference", "Congress", "consider", "consumer", "contain", "continue", "control", "cost", "could",
    "country", "couple", "course", "court", "cover", "create", "crime", "cultural", "culture", "cup",
    "current", "customer", "cut", "dark", "data", "daughter", "day", "dead", "deal", "death", "debate",
    "decade", "decide", "decision", "deep", "defense", "degree", "Democrat", "democratic", "describe",
    "design", "despite", "detail", "determine", "develop", "development", "die", "difference", "different",
    "difficult", "dinner", "direction", "director", "discover", "discuss", "discussion", "disease", "do",
    "doctor", "dog", "door", "down", "draw", "dream", "drive", "drop", "drug", "during", "each", "early",
    "east", "easy", "eat", "economic", "economy", "edge", "education", "effect", "effort", "eight",
    "either", "election", "else", "employee", "end", "energy", "enjoy", "enough", "enter", "entire",
    "environment", "environmental", "especially", "establish", "even", "evening", "event", "ever",
    "every", "everybody", "everyone", "everything", "evidence", "exactly", "example", "executive",
    "exist", "expect", "experience", "expert", "explain", "eye", "face", "fact", "factor", "fail", "fall",
    "family", "far", "fast", "father", "fear", "federal", "feel", "feeling", "few", "field", "fight",
    "figure", "fill", "film", "final", "finally", "financial", "find", "fine", "finger", "finish", "fire",
    "firm", "first", "fish", "five", "floor", "fly", "focus", "follow", "food", "foot", "for", "force",
    "foreign", "forget", "form", "former", "forward", "four", "free", "friend", "from", "front", "full",
    "fund", "future", "game", "garden", "gas", "general", "generation", "get", "girl", "give", "glass",
    "go", "goal", "good", "government", "great", "green", "ground", "group", "grow", "growth", "guess",
    "gun", "guy", "hair", "half", "hand", "hang", "happen", "happy", "hard", "have", "he", "head",
    "health", "hear", "heart", "heat", "heavy", "help", "her", "here", "herself", "high", "him", "himself",
    "his", "history", "hit", "hold", "home", "hope", "hospital", "hot", "hotel", "hour", "house", "how",
    "however", "huge", "human", "hundred", "husband", "I", "idea", "identify", "if", "image", "imagine",
    "impact", "important", "improve", "in", "include", "including", "increase", "indeed", "indicate",
    "individual", "industry", "information", "inside", "instead", "institution", "interest", "interesting",
    "international", "interview", "into", "investment", "involve", "issue", "it", "item", "its", "itself",
    "job", "join", "just", "keep", "key", "kid", "kill", "kind", "kitchen", "know", "knowledge", "land",
    "language", "large", "last", "late", "later", "laugh", "law", "lawyer", "lay", "lead", "leader",
    "learn", "least", "leave", "left", "leg", "legal", "less", "let", "letter", "level", "lie", "life",
    "light", "like", "likely", "line", "list", "listen", "little", "live", "local", "long", "look", "lose",
    "loss", "lot", "love", "low", "machine", "magazine", "main", "maintain", "major", "majority", "make",
    "man", "manage", "management", "manager", "many", "market", "marriage", "material", "matter", "may",
    "maybe", "me", "mean", "measure", "media", "medical", "meet", "meeting", "member", "memory", "mention",
    "message", "method", "middle", "might", "military", "million", "mind", "minute", "miss", "mission",
    "model", "modern", "moment", "money", "month", "more", "morning", "most", "mother", "mouth", "move",
    "movement", "movie", "Mr", "Mrs", "much", "music", "must", "my", "myself", "name", "nation", "national",
    "natural", "nature", "near", "nearly", "necessary", "need", "network", "never", "new", "news",
    "newspaper", "next", "nice", "night", "no", "none", "nor", "north", "not", "note", "nothing", "notice",
    "now", "number", "occur", "of", "off", "offer", "office", "officer", "official", "often", "oh", "oil",
    "ok", "old", "on", "once", "one", "only", "onto", "open", "operation", "opportunity", "option", "or",
    "order", "organization", "other", "others", "our", "out", "outside", "over", "own", "owner", "page",
    "pain", "painting", "paper", "parent", "part", "participant", "particular", "particularly", "partner",
    "party", "pass", "past", "patient", "pattern", "pay", "peace", "people", "per", "perform", "performance",
    "perhaps", "period", "person", "personal", "phone", "physical", "pick", "picture", "piece", "place",
    "plan", "plant", "play", "player", "PM", "point", "police", "policy", "political", "politics", "poor",
    "popular", "population", "position", "positive", "possible", "power", "practice", "prepare",
    "present", "president", "pressure", "pretty", "prevent", "price", "private", "probably", "problem",
    "process", "produce", "product", "production", "professional", "professor", "program", "project",
    "property", "protect", "prove", "provide", "public", "pull", "purpose", "push", "put", "quality",
    "question", "quickly", 'quite', "race", "radio", "raise", "range", "rate", "rather", "reach", "read",
    "ready", "real", "reality", "realize", "really", "reason", "receive", "recent", "recently",
    "recognize", "record", "red", "reduce", "reflect", "region", "relate", "relationship", "religious",
    "remain", "remember", "remove", "report", "represent", "Republican", "require", "research", "resource",
    "respond", "response", "responsibility", "rest", "result", "return", "reveal", "rich", "right", "rise",
    "risk", "road", "rock", "role", "room", "rule", "run", "safe", "same", "save", "say", "scene",
    "school", "science", "scientist", "score", "sea", "season", "seat", "second", "section", "security",
    "see", "seek", "seem", "sell", "send", "senior", "sense", "series", "serious", "serve", "service",
    "set", "seven", "several", "sex", "sexual", "shake", "share", "she", "shoot", "short", "shot",
    "should", "shoulder", "show", "side", "sign", "significant", "similar", "simple", "simply", "since",
    "sing", "single", "sister", "sit", "site", "situation", "six", "size", "skill", "skin", "small",
    "smile", "so", "social", "society", "soldier", "some", "somebody", "someone", "something", "sometimes",
    "son", "song", "soon", "sort", "sound", "source", "south", "southern", "space", "speak", "special",
    "specific", "speech", "spend", "sport", "spring", "staff", "stage", "stand", "standard", "star",
    "start", "state", "statement", "station", "stay", "step", "still", "stock", "stop", "store", "story",
    "strategy", "street", "strong", "structure", "student", "study", "stuff", "style", "subject",
    "success", "successful", "such", "suddenly", "suffer", "suggest", "summer", "support", "sure",
    "surface", "system", "table", "take", "talk", "task", "tax", "teach", "teacher", "team", "technology",
    "television", "tell", "ten", "tend", "term", "test", "than", "thank", "that", "the", "their", "them",
    "themselves", "then", "theory", "there", "these", "they", "thing", "think", "third", "this", "those",
    "though", "thought", "thousand", "threat", "three", "through", "throughout", "throw", "thus", "time",
    "to", "today", "together", "tonight", "too", "top", "total", "tough", "toward", "town", "trade",
    "traditional", "training", "travel", "treat", "treatment", "tree", "trial", "trip", "trouble", "true",
    "truth", "try", "turn", "TV", "two", "type", "under", "understand", "unit", "until", "up", "upon",
    "us", "use", "usually", "value", "various", "very", "victim", "view", "violence", "visit", "voice",
    "vote", "wait", "walk", "wall", "want", "war", "watch", "water", "way", "we", "weapon", "wear", "week",
    "weight", "well", "west", "western", "what", "whatever", "when", "where", "whether", "which", "while",
    "white", "who", "whole", "whom", "whose", "why", "wide", "wife", "will", "win", "wind", "window",
    "wish", "with", "within", "without", "woman", "wonder", "word", "work", "worker", "world", "worry",
    "would", "write", "writer", "wrong", "yard", "yeah", "year", "yes", "yet", "you", "young", "your",
    "yourself"];

  wpmclient = 0;
  correctmatch = true;
  showDontSpam = false;
  wordtyped = "";
  timeLeft: number = 60;
  interval;
  timerStyle = "";
  wordsTried = 0;
  paused: boolean = false;
  executed:boolean = false;
  typedcharacters = 0;
  typedcharactersFinal = 0;
  wrongcharacters = 0;
  wrongcharactersFinal = 0;
  wrongwords = 0;

  leaderboards: LeaderBoard[];
  first_name: string;
  last_name: string;
  wpm: string;




  constructor(private leaderBoardService: LeaderboardService, 
              private _activatedRoute: ActivatedRoute, 
              private _router: Router) {
  }

  ngOnInit(): void {
    this.shuffle(this.words);
  }



  shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  }

  reloadWords(i: number) {
    if (i < 12) {
      return true;
    }
    return false;
  }


  countChar(){
    this.typedcharacters += 1;
    if(!(this.words[this.wordsTried].startsWith(this.wordtyped))){
      this.wrongcharacters += 1;
    }
    this.wpmclient = Math.ceil((this.typedcharactersFinal/5)-this.wrongcharactersFinal);
    if(this.wpmclient<0){
      this.wpmclient = 0;
    }
  }

  startTimer = (function () {
    return function () {
      if (!this.executed) {
        this.executed = true;
        this.interval = setInterval(() => {
          if (!this.paused) {
            if (this.timeLeft > 0) {
              this.timeLeft--;
            } else {
              this.timeLeft = 0;
            }
          }
        }, 1000);
      }
    };
  })();

  getColor() {
    if (this.wordtyped == " "){
      return 'none';
    }
    else if (this.words[this.wordsTried].startsWith(this.wordtyped) || this.wordtyped == this.words[this.wordsTried] + " "){
      return 'green';
    }
    else{
      return 'red';
    }
  }

  hideOrShow() {
    if (this.timerStyle != "color:#DF691A;") {
      this.timerStyle = "color:#DF691A;";
    }
    else {
      this.timerStyle = "";
    }
  }

  getWordStyle(word) {
    if (word == this.words[this.wordsTried]) {
      return 'background-color:grey';
    }
  }

  restart() {
    this.shuffle(this.words);
    this.executed=false;
    this.wordsTried = 0;
    this.timeLeft = 60;
    this.correctmatch = true;
    this.showDontSpam = false;
    this.wordtyped = "";
    this.paused=false;
    this.wpmclient=0;
    this.typedcharacters = 0;
    this.typedcharactersFinal = 0;
    this.wrongcharacters = 0;
    this.wrongcharactersFinal = 0;
    this.wrongwords = 0;
    clearInterval(this.interval);
  }


  nextWord() {
    this.typedcharactersFinal += this.typedcharacters;
    this.typedcharacters = 0;
    if (this.words[this.wordsTried] == this.wordtyped.slice(0, -1)) {
      this.wrongcharacters = 0;
      this.correctmatch = true;
    }
    else {
      this.wrongcharactersFinal += this.wrongcharacters;
      this.correctmatch = false;
      this.wrongwords += 1;
    }
    this.wordtyped = "";
    this.wordsTried += 1;
    if (this.wordsTried == 6) {
      this.wordsTried = 0;
      this.words.splice(0, 6);
    }
    else {
      ;
    }
    if(this.wrongwords == 20){
      this.timeLeft = 0;
      this.showDontSpam = true;
    }
  }

  onSubmit(){
    this.restart();
  }

  addLeaderBoard(){
    const newLeaderBoard = {
      first_name: this.first_name,
      last_name: this.last_name,
      wpm: this.wpmclient
    }
    this.leaderBoardService.addLeaderBoard(newLeaderBoard)
    .subscribe(res => {
      var obj = {
        _id: res["_id"],
        first_name: res["first_name"],
        last_name: res["last_name"],
        wpm: res["wpm"]
      }
    });
    this.first_name = "";
    this.last_name = "";
  }
}
