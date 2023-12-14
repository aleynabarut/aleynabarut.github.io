# Gerekli kütüphaneleri içe aktar
import json

# Listeyi tanımla
tasks = []

# Görev ekleme işlevini tanımla
def add_task(task_name, task_details, task_importance):
    # Yeni görevi oluştur
    new_task = {
        "name": task_name,
        "details": task_details,
        "importance": task_importance
    }

    # Görevi listeye ekle
    tasks.append(new_task)

    # Güncellenmiş görev listesini döndür
    return tasks

# Görevleri görüntüleme işlevini tanımla
def list_tasks():
    # Görevleri alfabetik olarak sırala
    tasks.sort(key=lambda task: task["name"])

    # Görevleri bir JSON nesnesi olarak serileştir
    tasks_json = json.dumps(tasks)

    # Dönüş
    return tasks_json

# Ana fonksiyon
if __name__ == "__main__":
    # Görev ekle
    tasks = add_task("Görev 1", "Görev açıklaması 1", "Düşük")
    tasks = add_task("Görev 2", "Görev açıklaması 2", "Orta")
    tasks = add_task("Görev 3", "Görev açıklaması 3", "Yüksek")

    # Görevleri görüntüle
    tasks_json = list_tasks()
    print(tasks_json)
