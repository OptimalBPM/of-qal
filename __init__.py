"""The QAL package provides functions for accessing, transforming and writing data"""


from qal.transformation.merge import Merge
from qal.dataset.factory import dataset_from_resource
from qal.common.resources import Resources
bpm_callbacks = None

def merge_datasets(_merge):
    print("In qal.merge_datasets")
    print("Initializing merge..")
    _merge_instance = Merge(_json=_merge, _base_path=source_path)

    # TODO: Add base path to the merge: , _base_path="/Users/nicklasborjesson/optimalframework/agent_repositories/000000010000010002e64d21")
    print("Executing merge..")
    _merge_instance.execute()
    print("Merge executed..")

def query(_resourceId, _resources = None):
    """Returns a dataset that """
    try:
        _resources = Resources(_resources_list=_resources, _base_path=source_path)
        print(str(_resources.as_json_dict()))
        _resource = _resources[_resourceId]
        _dataset = dataset_from_resource(_resource)
    except Exception as e:
        raise Exception ("Error initiating dataset: " + str(e))

    try:
        return _dataset.load()
    except Exception as e:
        raise Exception ("Error loading dataset: " + str(e))