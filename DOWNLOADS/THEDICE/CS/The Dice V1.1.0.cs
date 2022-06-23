using System;

namespace V1._1._0
{
    class thedice
    {
        static void Main(string[] args)
        {
            Console.BackgroundColor = ConsoleColor.Black;
            Console.ForegroundColor = ConsoleColor.White;
            Console.Clear();
            Info();
        }

        static void Info()
        {
            Console.WriteLine("Project:\tThe Dice");
            Console.WriteLine("Version:\t1.1.0");
            Console.WriteLine("Made by:\tfsForward");
            
            Console.WriteLine("\nCTRL + C to exit");
            Console.WriteLine("Press any key to continue...");
            Console.ReadKey();
            RollDice();
        }

        static void RollDice()
        {
            int rolls = 0;
            while (true)
            {
                Console.Clear();

                Random dice = new Random();
                rolls++;
                Console.WriteLine($"You rolled a: {dice.Next(1, 7)}");
                Console.WriteLine($"Dice rolled: {rolls} times");

                Console.Write("\nPress any key to roll The Dice again...");
                Console.ReadKey();
            }
        }
    }
}
