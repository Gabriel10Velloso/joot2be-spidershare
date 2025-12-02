import { National } from './../model/national.model';

import {throwError as observableThrowError} from 'rxjs';

import {catchError} from 'rxjs/operators/catchError';

import {map} from 'rxjs/operators/map';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http } from '@angular/http';

import { Funk } from '../model/funk.model';
import { AternativeRock } from '../model/aternativerock.model';
import { Rock } from '../model/rock.model';
import { Eletronica } from '../model/eletronica.model';
import { HeavyMetal } from '../model/heavymetal.model';
import { Pagode } from '../model/pagode.model';
import { Pop } from '../model/pop.model';
import { PostGrunge } from '../model/postgrunge.model';
import { Reggae } from '../model/reggae.model';
import { Sertanejo } from '../model/sertanejo.model';

@Injectable()
export class PlayListService {

  public url  = 'https://www.googleapis.com/youtube/v3/search';
  public url2  = 'https://downloadyoutubemp3.herokuapp.com/eu';
  public url3 = 'https://downloadyoutube.herokuapp.com/eu';
  private aternativerocks: AternativeRock[];
  private rocks: Rock[];
  private funks: Funk[];
  private eletronicas: Eletronica[];
  private heavymetals: HeavyMetal[];
  private national: National[];
  private pagodes: Pagode[];
  private pops: Pop[];
  private postgrunges: PostGrunge[];
  private reggaes: Reggae[];
  private sertanejos: Sertanejo[];
  
  private id_cont: number;
  constructor(private http: Http) {


        // ⏩Alternative Rock ⏩⏩⏩⏩⏩⏩⏩⏩⏩
        this.id_cont = 1;
        this.aternativerocks = [
            new AternativeRock(this.id_cont++, 'PLCQVMhB93ENXeCMVUgLu6me5qBV_IHLOc' , 'Mix (A. Rock) - jootoobe.com ♫ 👌', 'https://i.ytimg.com/vi/OnuuYcqhzCE/mqdefault.jpg'),
            new AternativeRock(this.id_cont++, 'PLCQVMhB93ENXoEnLmYjFdyJTj2J-SGHzb' , 'Linkin Park - jootoobe.com ♫ 👌', 'https://i.ytimg.com/vi/eVTXPUF4Oz4/mqdefault.jpg'),
            new AternativeRock(this.id_cont++, 'PLCQVMhB93ENX29PU-3tAGy7xYrYzWci2n' , 'AC/DC - jootoobe.com ♫ 👌', 'https://i.ytimg.com/vi/pAgnJDJN4VA/mqdefault.jpg'),
            new AternativeRock(this.id_cont++, 'PLCQVMhB93ENVRlbGhP2dj21lmlZBWIWkk' , 'The Rolling Stones - jootoobe.com ♫ 👌', 'https://i.ytimg.com/vi/Nqp2stVMVjM/mqdefault.jpg'),
            new AternativeRock(this.id_cont++, 'PLCQVMhB93ENXZ47SuTCQViQkMK6VecoR3' , 'Coldplay - jootoobe.com ♫ 👌', 'https://i.ytimg.com/vi/RB-RcX5DS5A/mqdefault.jpg'),
            new AternativeRock(this.id_cont++, 'PLCQVMhB93ENXvBTFYTdkBt9nTl-69GXFz' , 'Pearl Jam - jootoobe.com ♫ 👌', 'https://i.ytimg.com/vi/RgStt2i_pSk/mqdefault.jpg'),
            new AternativeRock(this.id_cont++, 'PLCQVMhB93ENUIf7Dv6iTqw_w8FN6x8LiP' , 'Red Hot Chili Peppers - jootoobe.com ♫ 👌', 'https://i.ytimg.com/vi/YlUKcNNmywk/mqdefault.jpg'),
            new AternativeRock(this.id_cont++, 'PLCQVMhB93ENVLCe4nYRBljXN99u-iCtJG' , 'Nirvana - jootoobe.com ♫ 👌', 'https://i.ytimg.com/vi/WoqPcln-yMk/mqdefault.jpg'),
            new AternativeRock(this.id_cont++, 'PLCQVMhB93ENUUUJVc3QgCwbCZWPi8Lwud' , 'Alice in Chains - jootoobe.com ♫ 👌', 'https://i.ytimg.com/vi/9KmYFY5oOvM/mqdefault.jpg'),
            new AternativeRock(this.id_cont++, 'PLCQVMhB93ENWzK28ABc_NeJr49bZvvzJO' , 'U2 - jootoobe.com ♫ 👌', 'https://i.ytimg.com/vi/98W9QuMq-2k/mqdefault.jpg'),
            new AternativeRock(this.id_cont++, 'PLCQVMhB93ENUrErlaJOsH_Txxzfp4UjTy' , 'Air Traffic - jootoobe.com ♫ 👌', 'https://i.ytimg.com/vi/gEAqBwDTTFU/mqdefault.jpg'),
            new AternativeRock(this.id_cont++, 'PLCQVMhB93ENWea7hX2G6nyr4MgpW77O5J' , 'Green Day - jootoobe.com ♫ 👌', 'https://i.ytimg.com/vi/VyV54YwPAkk/mqdefault.jpg'),
            new AternativeRock(this.id_cont++, 'PLCQVMhB93ENXiuDFRs0DF3Mf8v1f8AtJ5' , 'Soundgarden - jootoobe.com ♫ 👌', 'https://i.ytimg.com/vi/3mbBbFH9fAg/mqdefault.jpg'),
            new AternativeRock(this.id_cont++, 'PLCQVMhB93ENXlIueq4KmZ5pxjSn4KFQNi' , 'Radiohead - jootoobe.com ♫ 👌', 'https://i.ytimg.com/vi/XFkzRNyygfk/mqdefault.jpg'),
        ];

          // ⏩ Rock ⏩⏩⏩⏩⏩⏩⏩⏩⏩
          this.id_cont = 1;
          this.rocks = [
              new Rock(this.id_cont++, 'PLCQVMhB93ENVpH7c04zMT5CTn1fFMzsZ6' , 'Guns N Roses - jootoobe.com 👅', 'https://i.ytimg.com/vi/1w7OgIMMRc4/mqdefault.jpg'),
              new Rock(this.id_cont++, 'PLCQVMhB93ENWMRnkL7HEwYXfBUWd-TxWa' , 'Pink Floyd - jootoobe.com 👅', 'https://i.ytimg.com/vi/TFjmvfRvjTc/mqdefault.jpg'),
              new Rock(this.id_cont++, 'PLCQVMhB93ENXWfNnXcTWy2UuErGmbFVs3' , 'Queen - jootoobe.com 👅', 'https://i.ytimg.com/vi/NVIbCvfkO3E/mqdefault.jpg'),
              new Rock(this.id_cont++, 'PLCQVMhB93ENVReEnZbE21EsnDQ_YffedV' , 'Kiss - jootoobe.com 👅', 'https://i.ytimg.com/vi/QnDPqiFSU8Y/mqdefault.jpg'),
              new Rock(this.id_cont++, 'PLCQVMhB93ENXTyT22qb5hyCROe8vT8KqB' , 'Aerosmith - jootoobe.com 👅', 'https://i.ytimg.com/vi/JkK8g6FMEXE/mqdefault.jpg'),
              new Rock(this.id_cont++, 'PLCQVMhB93ENUX-bxnQFcp0Cv-s__sMVb7' , 'Van Halen - jootoobe.com 👅', 'https://i.ytimg.com/vi/SwYN7mTi6HM/mqdefault.jpg'),

          ];

        // ⏩Eletronica ⏩⏩⏩⏩⏩⏩⏩⏩⏩
        this.id_cont = 1;
        this.eletronicas = [
            new Eletronica(this.id_cont++, 'PLCQVMhB93ENUPokqU4MKQI_oliBXGRdRW' , 'Avicii - jootoobe.com 👀', 'https://i.ytimg.com/vi/HUHmUv-ouxE/mqdefault.jpg'),
            new Eletronica(this.id_cont++, 'PLCQVMhB93ENUWlJaaOQLUsBKZS87BdcBq' , 'Alok - jootoobe.com 👀', 'https://i.ytimg.com/vi/YcHvN6E9h9I/mqdefault.jpg'),
            new Eletronica(this.id_cont++, 'PLCQVMhB93ENX0q-vZJv7D2U-a02j29hYs' , 'David Guetta - jootoobe.com 👀', 'https://i.ytimg.com/vi/T-5pydbxaHY/mqdefault.jpg'),
            new Eletronica(this.id_cont++, 'PLCQVMhB93ENXWJivX4hfHiR9NKV304GCq' , 'Martin Garrix - jootoobe.com 👀', 'https://i.ytimg.com/vi/AewNd29wRUM/mqdefault.jpg'),
            new Eletronica(this.id_cont++, 'PLCQVMhB93ENWR1YydcVfzLWUY9tprdqew' , 'Dimitri Vegas - jootoobe.com 👀', 'https://i.ytimg.com/vi/KOl8LjKLDLs/mqdefault.jpg'),
            new Eletronica(this.id_cont++, 'PLCQVMhB93ENV75QAVToVvNdEpQa_9eE7_' , 'Marshmello - jootoobe.com 👀', 'https://i.ytimg.com/vi/JePnQ1gSagc/mqdefault.jpg'),
    
        ];


        // ⏩Funk 
        this.id_cont = 1;
        this.funks = [
            new Funk(this.id_cont++, 'PLCQVMhB93ENW4v7eyxdm2Kv8MBX1_mxAm' , 'Mix (Funk) - jootoobe.com 👯‍', 'https://i.ytimg.com/vi/1ppPuobqt-g/mqdefault.jpg'),
            new Funk(this.id_cont++, 'PLCQVMhB93ENVpQye_OEEonC8l6rTq8v4A' , 'Kevinho - jootoobe.com 👯‍', 'https://i.ytimg.com/vi/1MTsqRU-4LY/mqdefault.jpg'),
            new Funk(this.id_cont++, 'PLCQVMhB93ENUK0AKo80u5g6i0BMa8EbXo' , 'Anitta - jootoobe.com 👯‍', 'https://i.ytimg.com/vi/ghQOd88PM80/mqdefault.jpg'),
            new Funk(this.id_cont++, 'PLCQVMhB93ENU3tqyKG5CLUiAnZ7tElItQ' , 'MC WM - jootoobe.com 👯‍', 'https://i.ytimg.com/vi/4N2iMmHcHys/mqdefault.jpg'), 
        ]; 


    // ⏩Havy Metal ⏩⏩⏩⏩⏩⏩⏩⏩⏩
    this.id_cont = 1;
    this.heavymetals = [
        new HeavyMetal(this.id_cont++, 'PLCQVMhB93ENXLwNf5yScAnUtcdgteIjD7' , 'Rammstein - jootoobe.com 🤘', 'https://i.ytimg.com/vi/vqnk9HWbKRA/mqdefault.jpg'),
        new HeavyMetal(this.id_cont++, 'PLCQVMhB93ENWz5rOHwF-veYNNdWuAAskC' , 'Slipknot - jootoobe.com 🤘', 'https://i.ytimg.com/vi/t4c4r65-Xpg/mqdefault.jpg'),
        new HeavyMetal(this.id_cont++, 'PLCQVMhB93ENVhW3HHsDm-3HyPLiiLp75t' , 'Iron Maiden - jootoobe.com 🤘♪', 'https://i.ytimg.com/vi/2G5rfPISIwo/mqdefault.jpg'),
        new HeavyMetal(this.id_cont++, 'PLCQVMhB93ENU_9Nc8T41JLbnQmIg8mWrO' , 'Metallica - jootoobe.com 🤘', 'https://i.ytimg.com/vi/N9MT82RwdeI/mqdefault.jpg'),
        new HeavyMetal(this.id_cont++, 'PLCQVMhB93ENV13on2wC0oCwmZvFBaIwet' , 'Black Sabbath - jootoobe.com 🤘', 'https://i.ytimg.com/vi/y--23ECYxxE/mqdefault.jpg'),
        new HeavyMetal(this.id_cont++, 'PLCQVMhB93ENV-rj0am3qrqtj5IynwpbqB' , 'Motörhead - jootoobe.com 🤘', 'https://i.ytimg.com/vi/vcf7DnHi54g/mqdefault.jpg'),

    ]; 

     // ⏩National ⏩⏩⏩⏩⏩⏩⏩⏩⏩
     this.id_cont = 1;
     this.national = [
      new National(this.id_cont++, 'PLCQVMhB93ENVkDVEs71BeKUbavfGx1pEM' , 'Jota Quest - jootoobe.com 👻', 'https://i.ytimg.com/vi/h8y-45T_Hak/mqdefault.jpg'),
      new National(this.id_cont++, 'PLCQVMhB93ENWlHZ-N1QHMfhkr_6z5i9j8' , 'Barão Vermelho - jootoobe.com 👻', 'https://i.ytimg.com/vi/CiWKC45ZocE/mqdefault.jpg'),
      new National(this.id_cont++, 'PLCQVMhB93ENWbUctT4TjldJiXUXVpXTmV' , 'Mamonas Assassinas - jootoobe.com 👻', 'https://i.ytimg.com/vi/2-CZU9ZVeII/mqdefault.jpg'),
      new National(this.id_cont++, 'PLCQVMhB93ENXLY1SgrkqU50oWNDepK13n' , 'Charlie Brown -  jootoobe.com 👻', 'https://i.ytimg.com/vi/NeddTnf_KT0/mqdefault.jpg'),
      new National(this.id_cont++, 'PLCQVMhB93ENWfaa9Cr283Kwsb0Q8XzZP2' , 'Titãs - jootoobe.com 👻', 'https://i.ytimg.com/vi/m-Zp8w_4IF4/mqdefault.jpg'),
     
    ];


    // ⏩Pagode ⏩⏩⏩⏩⏩⏩⏩⏩⏩
    this.id_cont = 1;
    this.pagodes = [
    new Pagode(this.id_cont++, 'PLCQVMhB93ENU_C8swatqjAe_iQ7AZna8Y' , 'Revelação - jootoobe.com 🙌', 'https://i.ytimg.com/vi/c4XeTP11EI8/mqdefault.jpg'),
    new Pagode(this.id_cont++, 'PLCQVMhB93ENXCv46SUFqQvesEfUcTKHgg' , 'Mumuzinho - jootoobe.com 🙌', 'https://i.ytimg.com/vi/nOb5c2LLxjM/mqdefault.jpg'),
    new Pagode(this.id_cont++, 'PLCQVMhB93ENVBGKNz7yHY9pYORXQoKfmP' , 'Diogo Noguiea - jootoobe.com 🙌', 'https://i.ytimg.com/vi/oBAUzPiVDNk/mqdefault.jpg'),
    new Pagode(this.id_cont++, 'PLCQVMhB93ENXu4VjNR6tk1TiWGj_qIi-M' , 'Ferrugem - jootoobe.com 🙌', 'https://i.ytimg.com/vi/X64vNtPIm7Q/mqdefault.jpg'),
    
    ];

        // ⏩Pop ⏩⏩⏩⏩⏩⏩⏩⏩⏩
        this.id_cont = 1;
        this.pops = [
         new Pop(this.id_cont++, 'PLCQVMhB93ENUJcvceOi6zsDYB7c9ni6Nw' , 'Mix (Pop) - jootoobe.com ♫ 😊', 'https://i.ytimg.com/vi/z1fadkdxAX0/mqdefault.jpg'),
         new Pop(this.id_cont++, 'PLCQVMhB93ENWiuM2B7YpxIJQu_LP9wgLn' , 'Mix2 (Pop) - jootoobe.com ♫ 😊', 'https://i.ytimg.com/vi/jzf1GbCf6G4/mqdefault.jpg'),
         new Pop(this.id_cont++, 'PLCQVMhB93ENVSemOm311C06LGXUAHsXco' , '30 Seconds To Mars - jootoobe.com ♫ 😊', 'https://i.ytimg.com/vi/IqPATbDhrb4/mqdefault.jpg'),
         new Pop(this.id_cont++, 'PLCQVMhB93ENXgpoWl46poTXwJVYuO2_4y' , 'Rihanna - jootoobe.com ♫ 😊', 'https://i.ytimg.com/vi/up7pvPqNkuU/mqdefault.jpg'),
         new Pop(this.id_cont++, 'PLCQVMhB93ENXSl76ZlQCrmGwLLTAUQRMw' , 'Imagine Dragons - jootoobe.com ♫ 😊', 'https://i.ytimg.com/vi/aJOTlE1K90k/mqdefault.jpg'),
         new Pop(this.id_cont++, 'PLCQVMhB93ENXd34NyPiKP75SZWnYrf2MX' , 'Maroon 5 - jootoobe.com ♫ 😊', 'https://i.ytimg.com/vi/e_xeueXBhWY/mqdefault.jpg'),
         new Pop(this.id_cont++, 'PLCQVMhB93ENV8PEqMBL2w8Ibg10POrmzL' , 'Sam Smith - jootoobe.com ♫ 😊', 'https://i.ytimg.com/vi/5uC5RJIoeOE/mqdefault.jpg'),
        
       ];


       // ⏩PostGrunge ⏩⏩⏩⏩⏩⏩⏩⏩⏩
       this.id_cont = 1;
       this.postgrunges = [
        new PostGrunge(this.id_cont++, 'PLCQVMhB93ENXbU3dWGN4Tq7FTOEUy65Kc' , 'Creed - jootoobe.com ♪ 🤩', 'https://i.ytimg.com/vi/99j0zLuNhi8/hqdefault.jpg'),
        new PostGrunge(this.id_cont++, 'PLCQVMhB93ENXB2UXuuaCUFW88mNiSmUWx' , 'Foo Fighters - jootoobe.com ♪ 🤩', 'https://i.ytimg.com/vi/kbpqZT_56Ns/mqdefault.jpg'),
        new PostGrunge(this.id_cont++, 'PLCQVMhB93ENWQ5On3uuW3pQzr8YEh3r1q' , 'Skillet jootoobe.com ♪ 🤩', 'https://i.ytimg.com/vi/kR-fhBwISUU/mqdefault.jpg'),
        new PostGrunge(this.id_cont++, 'PLCQVMhB93ENVNQmNKlJ18mp8c1ApxuAir' , 'Seether - jootoobe.com ♪ 🤩', 'https://i.ytimg.com/vi/e_xeueXBhWY/mqdefault.jpg'),
        new PostGrunge(this.id_cont++, 'PLCQVMhB93ENU93fI7_5RHCxE8bm--n4pa' , 'Three Days Grace - jootoobe.com ♪ 🤩', 'https://i.ytimg.com/vi/Ud4HuAzHEUc/mqdefault.jpg'),
       
      ];


      // REGGAE ⏩⏩⏩⏩⏩⏩⏩⏩⏩
      this.id_cont = 1;
      this.reggaes = [
        new Reggae(this.id_cont++, 'PLCQVMhB93ENXGPSKN3pHxjOz_4-OvMrDI' , 'Bob Marley - jootoobe.com 💤', 'https://i.ytimg.com/vi/AcEb3AM6CGI/mqdefault.jpg'),
          new Reggae(this.id_cont++, 'PLCQVMhB93ENVDyvg5khV2als-Z_H0FNZP' , 'Ziggy Marley - jootoobe.com 💤', 'https://i.ytimg.com/vi/ikzQmC3S-mE/mqdefault.jpg'),
          new Reggae(this.id_cont++, 'PLCQVMhB93ENVOg6udL6eH59ls_YSZyuzX' , 'Sublime - jootoobe.com 💤', 'https://i.ytimg.com/vi/NxDO8PipeBw/mqdefault.jpg'),
          new Reggae(this.id_cont++, 'PLCQVMhB93ENUgdehfvnigxCSn7w9Aceax' , 'UB40 - jootoobe.com 💤', 'https://i.ytimg.com/vi/Ajp0Uaw4rqo/mqdefault.jpg'),
          new Reggae(this.id_cont++, 'PLCQVMhB93ENUcJXIUNvSRpPxu97YY4km4' , 'Toots Hibbert - jootoobe.com 💤', 'https://i.ytimg.com/vi/6rb13ksYO0s/mqdefault.jpg'),
          new Reggae(this.id_cont++, 'PLCQVMhB93ENWQBb9pL2Su03r-jgRbaAWz' , 'Alpha Blondy - jootoobe.com 💤', 'https://i.ytimg.com/vi/-CuoPHc1B1M/mqdefault.jpg'),
          new Reggae(this.id_cont++, 'PLCQVMhB93ENUCWKOBwKBOUD07J9K6QdxL' , 'Max Romeo - jootoobe.com 💤', 'https://i.ytimg.com/vi/KV5IPwaLOR4/mqdefault.jpg'),
      ];

    // ⏩SERTANEJO ⏩⏩⏩⏩⏩⏩⏩⏩⏩
    this.id_cont = 1;
    this.sertanejos = [
        new Sertanejo(this.id_cont++, 'PLCQVMhB93ENWR6XBQqY1UzaSh5B4eKr0y' , 'Top Sertanejo 2018 - jootoobe.com ♫&♪', 'https://i.ytimg.com/vi/uMTrrZMGkVE/mqdefault.jpg'),
        new Sertanejo(this.id_cont++, 'PLCQVMhB93ENVXlzDHSPOgHoFaFkbuybeL' , 'Mix Sertanejo - jootoobe.com ♫&♪', 'https://i.ytimg.com/vi/g-FIuQFDAxI/mqdefault.jpg'),
        new Sertanejo(this.id_cont++, 'PLCQVMhB93ENWDmIL0WxEM5IY4awDqsghX' , 'Michel Teló - jootoobe.com ♫&♪', 'https://i.ytimg.com/vi/AKhGc9nhq58/mqdefault.jpg'),
        new Sertanejo(this.id_cont++, 'PLCQVMhB93ENWWdlt6InD6deHOFuT5qfzc' , 'Marília Mendonça - jootoobe.com ♫&♪', 'https://i.ytimg.com/vi/wvln6hFsq1s/mqdefault.jpg'),
        new Sertanejo(this.id_cont++, 'PLCQVMhB93ENX8eFmeTe0ZarjpQaORDvl0' , 'Munhoz & Mariano - jootoobe.com ♫&♪', 'https://i.ytimg.com/vi/LvC09GWd7P8/mqdefault.jpg'),
        new Sertanejo(this.id_cont++, 'PLCQVMhB93ENXgOPYaFwmZLUqKC9voVjtF' , 'César Menotti & Fabiano - jootoobe.com ♫&♪', 'https://i.ytimg.com/vi/rS2FDyOKR2g/mqdefault.jpg'),
        new Sertanejo(this.id_cont++, 'PLCQVMhB93ENULXgGupMZkNiRr7sWf1oSJ' , 'Gusttavo Lima - jootoobe.com ♫&♪', 'https://i.ytimg.com/vi/lzDpA_q4LYM/mqdefault.jpg'),
        new Sertanejo(this.id_cont++, 'PLCQVMhB93ENUYcCrZPUZdMhACEZ6QFJd7' , 'Marcos & Belutti - jootoobe.com ♫&♪', 'https://i.ytimg.com/vi/ahxla19-BAA/mqdefault.jpg'),
        new Sertanejo(this.id_cont++, 'PLCQVMhB93ENXZOdBMAFevGbgu1sLsxRLW' , 'Henrique e Juliano - jootoobe.com ♫&♪', 'https://i.ytimg.com/vi/8Asry4qhEwE/mqdefault.jpg'),
        new Sertanejo(this.id_cont++, 'PLCQVMhB93ENW6VQlamP8THJC7CKj-uCbk' , 'Maiara e Maraisa - jootoobe.com ♫&♪', 'https://i.ytimg.com/vi/oTd9us3Dntc/mqdefault.jpg'),
        new Sertanejo(this.id_cont++, 'PLCQVMhB93ENV-FVSyYS9OS5jV1WTq7Vdv' , 'Luan Santana - jootoobe.com ♫&♪', 'https://i.ytimg.com/vi/5Fxaz55Rt60/mqdefault.jpg'),
    ];   
   }


  

   aternativerockList(): AternativeRock[] {
    return this.aternativerocks;
  }

  rockList(): Rock[] {
    return this.rocks;
  }
   eletronicaList(): Eletronica[] {
    return this.eletronicas;
  }

  funkList(): AternativeRock[] {
    return this.funks;
  }

   heavymetalList(): HeavyMetal[] {
    return this.heavymetals;
  }

  nationallList(): National[] {
    return this.national;
  }

   pagodeList(): Pagode[] {
    return this.pagodes;
  }
   popList(): Pop[] {
    return this.pops;
  }

   postgrungeList(): PostGrunge[] {
    return this.postgrunges;
  }

   reggaeList(): Reggae[] {
    return this.reggaes;
  }

  sertanejoList(): Sertanejo[] {
    return this.sertanejos;
  }

 




  
  getDownload():Observable<any>  {
    // return this.http.get(this.url2, {responseType: 'text'})
    return this.http.get(this.url2)
    .pipe(
        map((res: any) => {
        // console.log(res);
        return res;
        }) );
}


getDownload2():Observable<any>  {
    // return this.http.get(this.url2, {responseType: 'text'})
    return this.http.get(this.url3)
    .pipe(
        map((res: any) => {
        //  console.log(res);
        return res;
        }) );
}

buscar() : Observable<any>{
    return this.http.get('https://www.googleapis.com/youtube/v3/playlists?key=AIzaSyCcvxVg_cqiduSeLc8SBv9gMBjFvoPH-qM&channelId=UCoKO1VSbNce0GrssIbzyEgA&part=player,id,snippet,contentDetails&order=date&maxResults=50').pipe(
    map(res => res.json()),
    // .map(this.processCollection)
    catchError(error => observableThrowError(error)),
    );
  }



  buscar2() : Observable<any>{
    return this.http.get('https://www.googleapis.com/youtube/v3/playlists?key=AIzaSyBvEWtEcvXHko2tWux1L7g54dt5uUMoO44&channelId=UCJlOyApBQY-nlQmdxD78DjA&part=player,id,snippet,contentDetails&order=date&maxResults=50').pipe(
    map(res => res.json()),
    // .map(this.processCollection)
    catchError(error => observableThrowError(error)),);
  }
}
