import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'quizgame-old-testament',
  standalone: true,
  imports: [CommonModule],
  templateUrl: '../common/components/quiz/quiz.html',
  styleUrl: '../common/components/quiz/quiz.css',
})
export class JuegoBiblicoAntiguoTestamento {
  gameStarted: boolean = false;
  currentQuestionIndex: number = 0;
  showResult: boolean = false;
  isCorrect: boolean = false;
  resultMessage: string = '';
  showResponse: boolean = false;
  selectedOption: string = '';

  questions: any[] = [
    {
      text: '¿Quién le dió nombre a todos los animales?',
      options: ['Eva', 'Adán', 'Dios', 'Abel'],
      correctAnswer: 'Adán',
      responseSucess: '¡Correcto!',
      responseError: 'Pista: Génesis 2:19',
    },
    {
      text: '¿Cuál es el primer libro histórico después del pentateuco?',
      options: ['Éxodo', 'Daniel', '2 Crónicas', 'Josue'],
      correctAnswer: 'Josue',
      responseSucess: '¡Correcto!',
      responseError:
        'Pista: Buscar los 6 primeros libros de la Biblia',
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
    this.selectedOption = option;
    if (option === this.currentQuestion.correctAnswer) {
      this.isCorrect = true;
      this.resultMessage = this.currentQuestion.responseSucess;
    } else {
      this.isCorrect = false;
      this.resultMessage = this.currentQuestion.responseError;
    }
  }

  nextQuestion(): void {
    this.showResult = false;
    this.isCorrect = false;
    this.resultMessage = '';
    this.selectedOption = '';
    this.showResponse = false;
    this.currentQuestionIndex++;
    if (this.currentQuestionIndex >= this.questions.length) {
      // Fin del juego, reinicia
      this.gameStarted = false;
      this.currentQuestionIndex = 0;
    }
  }

  tryAgain(): void {
    this.showResponse = true;
  }
}
