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
        "importance": task_importance,
    }

    # Görevi listeye ekle
    tasks.append(new_task)

    # Güncellenmiş görev listesini döndür
    return tasks

# Görevleri görüntüleme işlevini tanımla
def list_tasks():
    # Görevleri alfabetik olarak sırala
    tasks.sort(key=lambda task: task["name"])

    # Görevleri bir listede döndür
    return tasks

# Görevi tamamlama işlevini tanımla
def complete_task(task_id):
    # Görevi bul
    task = tasks[task_id]

    # Görevi tamamlanmış olarak işaretle
    task["completed"] = True

    # Güncellenmiş görev listesini döndür
    return tasks

# Görevi silme işlevini tanımla
def delete_task(task_id):
    # Görevi bul
    task = tasks[task_id]

    # Görevi listeden kaldır
    tasks.remove(task)

    # Güncellenmiş görev listesini döndür
    return tasks

# Görevleri kaydetme işlevini tanımla
def save_tasks(file_path):
    # Görevleri bir JSON nesnesi olarak serileştir
    tasks_json = json.dumps(tasks)

    # Dosyaya yaz
    with open(file_path, "w") as file:
        file.write(tasks_json)

# Ana fonksiyon
if __name__ == "__main__":
    # Görev ekle
    tasks = add_task("Görev 1", "Görev açıklaması 1", "Düşük")
    tasks = add_task("Görev 2", "Görev açıklaması 2", "Orta")
    tasks = add_task("Görev 3", "Görev açıklaması 3", "Yüksek")

    # Görevleri görüntüle
    tasks = list_tasks()
    print(tasks)

    # Görevi tamamla
    tasks = complete_task(1)

    # Görevleri görüntüle
    tasks = list_tasks()
    print(tasks)

    # Görevi sil
    tasks = delete_task(2)

    # Görevleri görüntüle
    tasks = list_tasks()
    print(tasks)

    # Görevleri kaydet
    save_tasks("yapilacaklar.json")
