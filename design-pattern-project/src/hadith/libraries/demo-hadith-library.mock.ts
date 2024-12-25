import { Injectable } from '@nestjs/common';

@Injectable()
export class DemoHadithLibraryMock {
  private hadiths = [
    '',
    '',
    "Narrated By Ibn 'Umar : Allah's Apostle said: Islam is based on (the following) five (principles): 1. To testify that none has the right to be worshipped but Allah and Muhammad is Allah's Apostle. 2. To offer the (compulsory congregational) prayers dutifully and perfectly. 3. To pay Zakat. (i.e. obligatory charity) 4. To perform Hajj. (i.e. Pilgrimage to Mecca) 5. To observe fast during the month of Ramadan.\n" +
      '-Sahih Bukhari Volume 1, Book 2, Hadith 8\n\n' +
      "Qur'anic references:\n" +
      'Surah 9 : Ayah 71\n',
    'Narrated By Abu Huraira : While the Prophet was saying something in a gathering, a Bedouin came and asked him, "When would the Hour (Doomsday) take place?" Allah\'s Apostle continued his talk, so some people said that Allah\'s Apostle had heard the question, but did not like what that Bedouin had asked. Some of them said that Allah\'s Apostle had not heard it. When the Prophet finished his speech, he said, "Where is the questioner, who enquired about the Hour (Doomsday)?" The Bedouin said, "I am here, O Allah\'s Apostle ." Then the Prophet said, "When honesty is lost, then wait for the Hour (Doomsday)." The Bedouin said, "How will that be lost?" The Prophet said, "When the power or authority comes in the hands of unfit persons, then wait for the Hour (Doomsday.)"' +
      '-Sahih Bukhari Volume 1, Book 3, Hadith 59',
    "Narrated By 'Abdullah bin Abbas : Al-Fadl (his brother) was riding behind Allah's Apostle and a woman from the tribe of Khath'am came and Al-Fadl started looking at her and she started looking at him. The Prophet turned Al-Fadl's face to the other side. The woman said, \"O Allah's Apostle! The obligation of Hajj enjoined by Allah on His devotees has become due on my father and he is old and weak, and he cannot sit firm on the Mount; may I perform Hajj on his behalf?\" The Prophet replied, \"Yes, you may.\" That happened during the Hajj-al-Wida (of the Prophet)." +
      '-Sahih Bukhari Volume 2, Book 25, Hadith 1514',
    'It was narrated from Abu Hurairah [May Allah pleased with him] that the Messenger of Allah (SAW) said: “When Ramadan comes, the gates of Paradise are opened and gates of the Fire are closed, and the devils are fettered.”\n' +
      '\n' +
      '-Sahih Muslim Book - 13, Hadith - 2495',
    'It was narrated from Zaid bin Aslam, from his father, that \'Umar bin Al-Khattab said: "I donated a fine horse (to be ridden in Jihad) in the cause of Allah, and its owner neglected it. I thought that he would sell it for a cheap price, and I asked the Messenger of Allah (s.a.w) about that. He said: \'Do not buy it, and do not take back your charity, for the one who takes back his charity is like the dog that returns to its vomit."\n' +
      '\n' +
      '-Sahih Muslim Book - 24, Hadith - 4163',
    'It was narrated from Umm Salamah, the wife of the Prophet (s.a.w), that the Messenger of Allah (s.a.w) said: "The one who drinks from a vessel of silver is gulping the fire of Hell into his belly."' +
      '\n' +
      '-Sahih Muslim Book - 37, Hadith - 5385',
    "It was narrated that 'Abdullah said: \"The Messenger of Allah (s.a.w) - and he is the truthful, the one who is believed - told us: 'The creation of any one of you is put together in his mother's womb for forty days, then, he is during that (period) an 'Alaqah for a similar period. Then he becomes a Mudghah for a similar period. Then Allah sends to him an angel who breathes the soul into him, and is enjoined to write down four things: His provision, his lifespan, his deeds and his misery or happiness. By the One besides Whom none has the right lobe worshiped! One of you may do the deeds of the people of Paradise until there is nothing between him and it but a cubit, then the Decree overtakes him and he does the deeds of the people of the Fire and enters it. And one of you may do the deeds of the people of the Fire until there is nothing between him and it but a cubit, then the Decree overtakes him and he does the deeds of the people of Paradise, and enters it.\"" +
      '\n' +
      '-Sahih Muslim Book - 46, Hadith - 6723',
    "It was narrated that Abu Hurairah said: \"A man came to the Messenger of Allah (s.a.w) and said: 'Which of the people is most deserving of my best companionship?' He said: 'Your mother.' He said: 'Then who?' He said: 'Then your mother.' He said: 'Then who?' He said: 'Then your mother.' He said: 'Then who?' He said: 'Then your father.'\" In the Hadith of Qutaibah it says: \"Who is most deserving of my best companionship?\" And he did not say: \"Which of the people?\"" +
      '\n' +
      '-Sahih Muslim Book - 45, Hadith - 6500',
    'When Allah decreed the Creation He pledged Himself by writing in His book which is laid down with Him: My mercy prevails over my wrath.' +
      '\n' +
      '-Hadith Qudsi',
    'Ibn Abbas(RAH) narrated that:the Prophet send Muadh to Yemen, and said: “You are going to some people among the People of the Book. Call them to bear witness that none has the right to be worshipped but Allah, and that I am the messenger of Allah. If they obey that, then tell them that Allah has enjoined upon them five prayers every day and night. If they obey that, then tell them that Allah has enjoined upon them charity (Zakat) from their wealth, to be taken from the rich and given to their poor. If they obey that, then beware of (taking) the best of their wealth. And beware of the supplication of the oppressed, for there is no barrier between and Allah.”' +
      '\n' +
      '-Sunan Ibn Majah Book 8, Hadith 1783',
  ];

  async getHadith(): Promise<string | null> {
    const length = this.hadiths.length;
    return this.hadiths[Math.floor(Math.random() * length)];
  }
}
