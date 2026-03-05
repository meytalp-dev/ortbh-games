'use strict';

/* =====================================================
   מילון - כל 47 המילים מתוך "דפי חזרה יב אנגלית"
   ===================================================== */
const VOCAB = [
  { en: 'Young',       he: 'צעיר',         tip: 'ילדים הם צעירים – ההפך ממבוגר' },
  { en: 'Learn',       he: 'ללמוד',        tip: 'מה עושים בבית הספר כל יום' },
  { en: 'Language',    he: 'שפה',          tip: 'עברית ואנגלית הן שפות שונות' },
  { en: 'Grow up',     he: 'לגדול',        tip: 'ילדים גדלים ונעשים מבוגרים' },
  { en: 'Begin',       he: 'להתחיל',       tip: 'ההפך מלסיים – Start = Begin' },
  { en: 'Lose',        he: 'לאבד',         tip: 'ההפך מלמצוא או לנצח' },
  { en: 'Ability',     he: 'יכולת',        tip: 'כשרון לעשות משהו מסוים' },
  { en: 'Recent',      he: 'עדכני',        tip: 'קרוב בזמן, מן הזמן האחרון' },
  { en: 'Study',       he: 'לחקור',        tip: 'ללמוד לעומק, לחקור נושא' },
  { en: 'Researcher',  he: 'חוקר',         tip: 'מי שעורך מחקר מדעי' },
  { en: 'Found',       he: 'מצא',          tip: 'עבר של "to find" – למצוא' },
  { en: 'Adult',       he: 'מבוגר',        tip: 'ההפך מילד – בן 18 ומעלה' },
  { en: 'Easily',      he: 'בקלות',        tip: 'ללא מאמץ, בדרך פשוטה' },
  { en: 'Physical',    he: 'פיזי',         tip: 'קשור לגוף, לא לנפש' },
  { en: 'Exercise',    he: 'להתאמן',       tip: 'פעילות גופנית – gym, sport' },
  { en: 'While',       he: 'בזמן ש',       tip: 'במקביל לדבר אחר שקורה' },
  { en: 'Divide',      he: 'לחלק',         tip: 'לפצל לחלקים נפרדים' },
  { en: 'Into',        he: 'לתוך',         tip: 'כיוון פנימה – נכנסים לתוך הבית' },
  { en: 'Group',       he: 'קבוצה',        tip: 'אוסף אנשים שפועלים יחד' },
  { en: 'Continue',    he: 'להמשיך',       tip: 'לא לעצור – ממשיכים קדימה' },
  { en: 'Class',       he: 'כיתה',         tip: 'קבוצת תלמידים בבית הספר' },
  { en: 'Always',      he: 'תמיד',         tip: 'בכל זמן, ללא יוצא מן הכלל' },
  { en: 'Done',        he: 'גמור',         tip: 'הסתיים, הושלם – "I\'m done!"' },
  { en: 'Add',         he: 'להוסיף',       tip: 'לשים עוד משהו מעל מה שיש' },
  { en: 'Ride',        he: 'לרכב',         tip: 'לנסוע על אופניים או סוס' },
  { en: 'Bike',        he: 'אופניים',      tip: 'כלי רכב עם שני גלגלים' },
  { en: 'Before',      he: 'לפני',         tip: 'ההפך מאחרי – earlier in time' },
  { en: 'Until',       he: 'עד',           tip: 'גבול זמן – "wait until 5pm"' },
  { en: 'Both',        he: 'שניהם',        tip: 'שניים יחד – לא אחד מהם, שניהם!' },
  { en: 'Participate', he: 'להשתתף',       tip: 'להיות חלק פעיל בפעילות' },
  { en: 'Month',       he: 'חודש',         tip: 'ינואר, פברואר – אחד מ-12 בשנה' },
  { en: 'Test',        he: 'מבחן',         tip: 'בדיקת ידע – כזה שמתכוננים אליו!' },
  { en: 'Show',        he: 'להראות',       tip: 'לגלות, להציג משהו לאחרים' },
  { en: 'Better',      he: 'טוב יותר',     tip: 'השוואה: good → better → best' },
  { en: 'Sat',         he: 'ישב',          tip: 'עבר של "to sit" – לשבת' },
  { en: 'Classroom',   he: 'חדר כיתה',     tip: 'החדר הספציפי שבו לומדים' },
  { en: 'Remember',    he: 'לזכור',        tip: 'ההפך משכוח – to recall' },
  { en: 'Word',        he: 'מילה',         tip: 'יחידה בסיסית בשפה, כמו "שלום"' },
  { en: 'Longer',      he: 'ארוך יותר',    tip: 'השוואה: long → longer → longest' },
  { en: 'Finding',     he: 'ממצא',         tip: 'תוצאה של מחקר, גילוי חדש' },
  { en: 'Unexpected',  he: 'בלתי צפוי',    tip: 'לא ציפו לזה – הפתעה!' },
  { en: 'Report',      he: 'דוח',          tip: 'מסמך המסכם נתונים ותוצאות' },
  { en: 'Able',        he: 'מסוגל',        tip: 'יש לו יכולת לעשות משהו' },
  { en: 'Enjoy',       he: 'ליהנות',       tip: 'להרגיש אושר ועונג מדבר מה' },
  { en: 'Conclusion',  he: 'מסקנה',        tip: 'הנקודה הסופית של מחקר או ויכוח' },
  { en: 'Improve',     he: 'לשפר',         tip: 'לעשות טוב יותר ממה שהיה' },
  { en: 'Person',      he: 'אדם',          tip: 'בן אנוש – יחיד, לא קבוצה' },
];

/* =====================================================
   GAME CONFIG
   ===================================================== */
const TOTAL_Q    = 10;
const TIMER_SEC  = 60;
const PT_CORRECT = 10;
const PT_WRONG   = -2;

/* =====================================================
   GAME STATE
   ===================================================== */
let questions = [];
let current   = 0;
let score     = 0;
let correct   = 0;
let wrong     = 0;
let timerID   = null;
let timeLeft  = TIMER_SEC;
let answered  = false;

/* =====================================================
   UTILS
   ===================================================== */
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function buildQuestions() {
  return VOCAB.map((v, i) => {
    const others = shuffle(VOCAB.filter((_, j) => j !== i));
    const distractors = others.slice(0, 3).map(o => o.he);
    const options = shuffle([v.he, ...distractors]);
    return {
      category: '📖 אוצר מילים',
      question:  `מה המשמעות של המילה "${v.en}"?`,
      options,
      answer:    v.he,
      tip:       v.tip,
    };
  });
}

/* =====================================================
   DOM HELPERS
   ===================================================== */
const $ = id => document.getElementById(id);

function showScreen(name) {
  ['intro', 'question', 'feedback', 'end'].forEach(s => {
    $('screen-' + s).classList.remove('active');
  });
  $('screen-' + name).classList.add('active');
}

/* =====================================================
   GAME FLOW
   ===================================================== */
function startGame() {
  questions = shuffle(buildQuestions()).slice(0, TOTAL_Q);
  current   = 0;
  score     = 0;
  correct   = 0;
  wrong     = 0;
  showScreen('question');
  renderQuestion();
}

function renderQuestion() {
  answered = false;
  const q = questions[current];

  $('q-number').textContent = `${current + 1} / ${TOTAL_Q}`;
  $('score-val').textContent = score;
  $('progress-fill').style.width = `${(current / TOTAL_Q) * 100}%`;
  $('q-category').textContent = q.category;
  $('q-text').textContent = q.question;

  const grid = $('options-grid');
  grid.innerHTML = '';
  const labels = ['א', 'ב', 'ג', 'ד'];
  q.options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'opt-btn';
    btn.innerHTML = `<span class="opt-label">${labels[i]}</span><span class="opt-text">${opt}</span>`;
    btn.addEventListener('click', () => pickAnswer(opt, btn));
    grid.appendChild(btn);
  });

  startTimer();
}

/* =====================================================
   TIMER
   ===================================================== */
function startTimer() {
  clearInterval(timerID);
  timeLeft = TIMER_SEC;
  updateTimerUI();
  timerID = setInterval(() => {
    timeLeft--;
    updateTimerUI();
    if (timeLeft <= 0) {
      clearInterval(timerID);
      onTimeout();
    }
  }, 1000);
}

function updateTimerUI() {
  const el = $('timer-val');
  el.textContent = timeLeft;
  el.classList.toggle('danger', timeLeft <= 10);
}

function onTimeout() {
  if (answered) return;
  answered = true;
  revealCorrect(null);
  wrong++;
  score = Math.max(0, score + PT_WRONG);
  $('score-val').textContent = score;
  showFeedback(false, true);
}

/* =====================================================
   ANSWER HANDLING
   ===================================================== */
function pickAnswer(chosen, btn) {
  if (answered) return;
  answered = true;
  clearInterval(timerID);

  const isCorrect = chosen === questions[current].answer;
  revealCorrect(btn);

  if (isCorrect) {
    correct++;
    score += PT_CORRECT;
  } else {
    wrong++;
    score = Math.max(0, score + PT_WRONG);
  }
  $('score-val').textContent = score;
  showFeedback(isCorrect, false);
}

function revealCorrect(selectedBtn) {
  const answer = questions[current].answer;
  document.querySelectorAll('.opt-btn').forEach(b => {
    b.disabled = true;
    const text = b.querySelector('.opt-text').textContent;
    if (text === answer) {
      b.classList.add('correct');
    } else if (b === selectedBtn) {
      b.classList.add('wrong');
    } else {
      b.classList.add('locked');
    }
  });
}

/* =====================================================
   FEEDBACK SCREEN
   ===================================================== */
function showFeedback(isCorrect, isTimeout) {
  const q = questions[current];

  if (isTimeout) {
    $('fb-icon').textContent  = '⏰';
    $('fb-title').textContent = 'נגמר הזמן!';
    $('fb-points').textContent = PT_WRONG + ' נקודות';
    $('fb-points').className   = 'fb-points miss';
  } else if (isCorrect) {
    $('fb-icon').textContent  = '✅';
    $('fb-title').textContent = 'מצוין!';
    $('fb-points').textContent = '+' + PT_CORRECT + ' נקודות';
    $('fb-points').className   = 'fb-points';
  } else {
    $('fb-icon').textContent  = '❌';
    $('fb-title').textContent = 'לא נכון';
    $('fb-points').textContent = PT_WRONG + ' נקודות';
    $('fb-points').className   = 'fb-points miss';
  }

  $('fb-text').textContent = `התשובה הנכונה: "${q.answer}" — ${q.tip}`;
  showScreen('feedback');
}

/* =====================================================
   NEXT QUESTION
   ===================================================== */
function nextQuestion() {
  current++;
  if (current >= TOTAL_Q) {
    showEndScreen();
  } else {
    showScreen('question');
    renderQuestion();
  }
}

/* =====================================================
   END SCREEN
   ===================================================== */
function showEndScreen() {
  const pct = score / (TOTAL_Q * PT_CORRECT);

  let trophy, msg, profile;
  if (pct >= 0.9) {
    trophy  = '🏆';
    msg     = 'מושלם! אתה בוס האנגלית!';
    profile = 'שליטה מעולה במילון. תצליח במבחן בגדול!';
  } else if (pct >= 0.7) {
    trophy  = '🥇';
    msg     = 'כל הכבוד! עבודה יפה מאוד';
    profile = 'בסיס חזק. כדאי לחזור על המילים שפספסת.';
  } else if (pct >= 0.5) {
    trophy  = '🥈';
    msg     = 'לא רע! יש מה לשפר';
    profile = 'נסה שוב ושים לב למילים שטעית בהן.';
  } else {
    trophy  = '📚';
    msg     = 'צריך לחזור על החומר';
    profile = 'חזור על הרשימה ולמד שוב לפני המבחן!';
  }

  $('end-trophy').textContent  = trophy;
  $('end-score').textContent   = score;
  $('end-message').textContent = msg;
  $('end-profile').textContent = profile;

  $('end-stats').innerHTML = `
    <div class="end-stat">
      <span class="end-stat-num">${correct}</span>
      <span class="end-stat-label">✅ נכון</span>
    </div>
    <div class="end-stat">
      <span class="end-stat-num">${wrong}</span>
      <span class="end-stat-label">❌ טעות</span>
    </div>
    <div class="end-stat">
      <span class="end-stat-num">${score}</span>
      <span class="end-stat-label">⭐ ניקוד</span>
    </div>
  `;

  setTimeout(() => {
    $('end-progress-fill').style.width = `${Math.max(0, pct) * 100}%`;
  }, 100);

  showScreen('end');
}

/* =====================================================
   EVENTS
   ===================================================== */
$('btn-start').addEventListener('click', startGame);
$('btn-next').addEventListener('click', nextQuestion);
$('btn-restart').addEventListener('click', startGame);
