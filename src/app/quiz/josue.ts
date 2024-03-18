import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'quiz-character-josue',
  standalone: true,
  imports: [NgIf, NgClass],
  templateUrl: '../common/components/quiz/quiz.html',
  styleUrl: '../common/components/quiz/quiz.css'
})
export class QuizCharacterJosue {
  gameStarted: boolean = false;
  currentQuestionIndex: number = 0;
  showResult: boolean = false;
  isCorrect: boolean = false;
  resultMessage: string = '';

  questions: any[] = [
    {
      text: '¿Quién fue el primer hombre creado por Dios?',
      options: ['Adán', 'Abraham', 'Moisés', 'Pablo'],
      correctAnswer: 'Adán'
    },
    {
      text: '¿Cuál fue el milagro de Jesús más conocido?',
      options: ['La multiplicación de los panes y los peces', 'La resurrección de Lázaro', 'Caminar sobre el agua', 'Convertir el agua en vino'],
      correctAnswer: 'La resurrección de Lázaro'
    },
  ];

  get currentQuestion(): any {
    return this.questions[this.currentQuestionIndex];
  }

  startGame(): void {
    this.gameStarted = true;
  }

  checkAnswer(option: string): void {
    this.showResult = true;
    if (option === this.currentQuestion.correctAnswer) {
      this.isCorrect = true;
      this.resultMessage = '¡Respuesta correcta!';
    } else {
      this.isCorrect = false;
      this.resultMessage = 'Respuesta incorrecta. La respuesta correcta es: ' + this.currentQuestion.correctAnswer;
    }
  }

  nextQuestion(): void {
    this.showResult = false;
    this.isCorrect = false;
    this.resultMessage = '';
    this.currentQuestionIndex++;
    if (this.currentQuestionIndex >= this.questions.length) {
      // Fin del juego, reinicia
      this.gameStarted = false;
      this.currentQuestionIndex = 0;
    }
  }
}
