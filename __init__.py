"""The QAL package provides functions for accessing, transforming and writing data"""


from qal.transformation.merge import Merge
bpm_callbacks = None

def merge_datasets(merge):
    print("In qal.merge_datasets")
    print("Initializing merge..")
    _merge = Merge(_json=merge, _base_path="/Users/nicklasborjesson/optimalframework/agent_repositories/000000010000010002e64d21")
    print("Executing merge..")
    _merge.execute()
    print("Merge executed..")
