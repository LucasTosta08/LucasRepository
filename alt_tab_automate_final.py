import time
import pyautogui

def alternar_janelas(tempo_em_segundos):
  """
  Alterna entre todas as janelas abertas a cada intervalo de tempo definido.
  """

  while True:
    # Pressione Alt+Shift+Tab para alternar para a janela anterior
    pyautogui.hotkey('alt', 'shift', 'tab')
    time.sleep(0.2)  # Pequena pausa para a janela ganhar foco

    # Libera as teclas
    pyautogui.keyUp('alt')
    pyautogui.keyUp('shift')
    pyautogui.keyUp('tab')

    time.sleep(tempo_em_segundos)

# Solicita ao usuário o tempo desejado
tempo_usuario = int(input("Digite o tempo em segundos para alternar as janelas: "))

# Inicia a alternância de janelas
alternar_janelas(tempo_usuario)