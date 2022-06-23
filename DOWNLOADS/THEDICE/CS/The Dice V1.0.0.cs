using System;

namespace V1._0._0
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
            Console.WriteLine("Version:\t1.0.0");
            Console.WriteLine("Made by:\tfsForward");
            
            Console.WriteLine("\nCTRL + C to exit");
            Console.WriteLine("Press any key to continue...");
            Console.ReadKey();
            RollDice();
        }

        static void RollDice()
        {
            Console.Clear();

            Random dice = new Random();
            Console.WriteLine(dice.Next(1, 7));
            Console.Write("Press any key to roll The Dice again...");
            Console.ReadKey();
            RollDice();
        }
    }
}
